import {AppComponent} from '../../core/AppComponent';
import {completeTopic, changeCurrentTopic} from '../../redux/actions';
import {CompleteTopic, ChangeCurrentTopic} from '../../redux/types';
import {getData, getNode, openModal, transitionTo} from '../functions';
import {TestsSetUp} from '../TestsSetUp/TestsSetUp';
import {bodyRender} from './bodyRender';
import {htmlRender} from './htmlRender';

export class Definitions extends AppComponent {
  constructor(store) {
    super({
      store,
      listeners: ['click'],
      className: 'text-page'
    });
    this.data;
    this.state = this.getState('definitions');
    this.currentTopic = this.state.currentTopicIndex;
    this.completedTopics = this.state.completedTopics;
    this.$pageBody;
    this.subscribe(CompleteTopic, this.onDone.bind(this));
    this.subscribe(ChangeCurrentTopic, this.changeTopic.bind(this));
  }

  beforeInit() {
    super.beforeInit();
    this.$pageBody = getNode('.page__body');
  }

  async setData() {
    this.data = await getData('./data/definitions.json');
  }

  async onClick(e) {
    const elementRole = e.target.dataset.role;

    if (elementRole === 'back') {
      transitionTo('#home');
    } else if (elementRole === 'test') {
      await openModal(TestsSetUp, this.store, 'definitions');
    } else if (elementRole === 'done') {
      this.dispatch(completeTopic({
        section: 'definitions',
        topic: this.currentTopic
      }));
    } else if (elementRole === 'topic') {
      const newTopicIndex = +e.target.textContent-1;
      this.dispatch(changeCurrentTopic({
        section: 'definitions',
        newCurrentTopic: newTopicIndex
      }));
    }
  }

  onDone(state) {
    console.log(state);
    this.state = state.definitions;
    this.currentTopic = this.state.currentTopicIndex;
    this.completedTopics = this.state.completedTopics;
    this.$pageBody.innerHTML = bodyRender(this.data, this.state);
  }

  changeTopic(state) {
    this.state = state.definitions;
    this.currentTopic = this.state.currentTopicIndex;
    this.$pageBody.innerHTML = bodyRender(this.data, this.state);
  }
  async toHTML() {
    await this.setData();
    return htmlRender(this.data, this.state);
  }
}