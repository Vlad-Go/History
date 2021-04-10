import {AppComponent} from '../../core/AppComponent';
import {
  animate,
  getData,
  openModal,
  randomAray,
  transitionTo
} from '../functions';
import {Results} from '../Results/Results';
import {questionRender} from './questionRender';
import {htmlRender} from './htmlRender';

export class Test extends AppComponent {
  constructor(store) {
    super({
      store,
      listeners: ['click'],
      className: 'test-page'
    });
    this.data;
    this.state = this.getState('test');
    this.type = this.state.type;
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.result = {
      testType: this.type,
      questionsAmount: this.questions.length,
      wrongAnswers: []
    };
    this.selected;
    this.$testBody;
    this.$testCounter;
    this.$testFooter;
  }

  beforeInit() {
    super.beforeInit();
    this.$testBody = document.querySelector('.test__body');
    this.$testCounter = document.querySelector('.test__counter');
    this.$testFooter = document.querySelector('.test__footer');
  }

  async setData() {
    this.data = await getData(`./data/${this.type}.json`);

    if (this.state.topics === 'all') {
      Object.keys(this.data).forEach((topic) => {
        this.state.topics = ['All topics'];
        this.questions.push(...this.data[topic]);
      });
    } else {
      this.state.topics
          .forEach((topic) => this.questions.push(...this.data[topic]));
    }
    this.questions = randomAray(this.questions);
    this.result.questionsAmount = this.questions.length;
  }

  async onClick(e) {
    const elementRole = e.target.dataset.role;

    if (elementRole === 'check') {
      this.check();
      await this.nextQuestion();
    } else if (elementRole === 'back') {
      transitionTo(`#${this.type}`);
    } else if (elementRole === 'answer') {
      this.selected = e.target.dataset.answer;
    }
  }

  check() {
    if (this.selected == String(true)) {
      animate(
          this.$testFooter,
          {'backgroundColor': '#596C5D'}, {'backgroundColor': '#070707'},
          1000);
    } else {
      this.result.wrongAnswers.push(this.questions[this.currentQuestionIndex]);
      animate(
          this.$testFooter,
          {'backgroundColor': '#CA5252'}, {'backgroundColor': '#070707'},
          1000);
      // alert('Right aswer is ' + answer);
    }
    this.selected = false;
  }
  async nextQuestion() {
    this.currentQuestionIndex += 1;

    if (this.currentQuestionIndex === this.questions.length) {
      await openModal(Results, this.store, this.result);
      return;
    }
    this.questionRender();
    this.updateCounter();
  }
  questionRender() {
    this.$testBody.innerHTML =
    questionRender(this.type, this.questions, this.currentQuestionIndex);
  }
  updateCounter() {
    this.$testCounter.textContent =
    `${this.currentQuestionIndex + 1}/${this.questions.length}`;
  }


  async toHTML() {
    await this.setData();
    return htmlRender(this.state, this.questions);
  }
}