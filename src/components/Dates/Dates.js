import {AppComponent} from '../../core/AppComponent';
import {completeTopic, changeCurrentTopic} from '../../redux/actions';
import {CompleteTopic, ChangeCurrentTopic} from '../../redux/types';
import {getData, getNode, openModal, transitionTo} from '../functions';
import {TestsSetUp} from '../TestsSetUp/TestsSetUp';
import {bodyRender} from './bodyRender';
import {htmlRender} from './htmlRender';

export class Dates extends AppComponent {
  constructor(store) {
    super({
      store,
      listeners: ['click'],
      className: 'text-page'
    });
    this.data;
    this.state = this.getState('dates');
    this.currentTopic = this.state.currentTopicIndex;
    this.completedTopics = this.state.completedTopics;
    this.$datesBody;
    this.subscribe(CompleteTopic, this.onDone.bind(this));
    this.subscribe(ChangeCurrentTopic, this.changeTopic.bind(this));
  }

  beforeInit() {
    super.beforeInit();
    this.$pageBody = getNode('.page__body');
  }

  async setData() {
    this.data = await getData('./data/dates.json');
  }

  async onClick(e) {
    const elementRole = e.target.dataset.role;

    if (elementRole === 'back') {
      transitionTo('#home');
    } else if (elementRole === 'test') {
      await openModal(TestsSetUp, this.store, 'dates');
    } else if (elementRole === 'done') {
      this.dispatch(completeTopic({
        section: 'dates',
        topic: this.currentTopic
      }));
    } else if (elementRole === 'topic') {
      const newTopicIndex = +e.target.textContent-1;
      this.dispatch(changeCurrentTopic({
        section: 'dates',
        newCurrentTopic: newTopicIndex
      }));
    }
  }

  onDone(state) {
    console.log(state);
    this.state = state.dates;
    this.currentTopic = this.state.currentTopicIndex;
    this.completedTopics = this.state.completedTopics;
    this.$pageBody.innerHTML = bodyRender(this.data, this.state);
  }

  changeTopic(state) {
    this.state = state.dates;
    this.currentTopic = this.state.currentTopicIndex;
    this.$pageBody.innerHTML = bodyRender(this.data, this.state);
  }
  async toHTML() {
    await this.setData();
    return htmlRender(this.data, this.state);
  }
}