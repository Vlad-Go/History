import {AppComponent} from '../../core/AppComponent';
import {changeCurrentTopic, completeTopic} from '../../redux/actions';
import {getData, getNode, openModal, transitionTo} from '../functions';
import {TestsSetUp} from '../TestsSetUp/TestsSetUp';
import {htmlRender} from './htmlRender';
import {bodyRender} from './bodyRender';
import {itemRender} from './itemRender';
import {ChangeCurrentTopic, CompleteTopic} from '../../redux/types';

export class Monuments extends AppComponent {
  constructor(store) {
    super({
      store,
      listeners: ['click'],
      className: 'img-page'
    });
    this.data;
    this.state = this.getState('monuments');
    this.currentTopic = this.state.currentTopicIndex;
    this.completedTopics = this.state.completedTopics;
    this.currentItem = 0;
    this.$pageBody;
    this.$pageContent;
    this.$pageControler;
    this.subscribe(CompleteTopic, this.onDone.bind(this));
    this.subscribe(ChangeCurrentTopic, this.changeTopic.bind(this));
  }

  beforeInit() {
    super.beforeInit();
    this.$pageBody = getNode('.img-page__body');
    this.$pageControler = getNode('.controler__title');
    this.$pageContent = getNode('.img-page__content');
  }
  async setData() {
    this.data = await getData('./data/monuments.json');
  }


  async onClick(e) {
    const elementRole = e.target.dataset.role;

    if (elementRole === 'back') {
      transitionTo('#home');
    } else if (elementRole === 'test') {
      await openModal(TestsSetUp, this.store, 'monuments');
    } else if (elementRole === 'done') {
      this.dispatch(completeTopic({
        section: 'monuments',
        topic: this.currentTopic
      }));
    } else if (elementRole === 'topic') {
      const newTopicIndex = +e.target.textContent-1;
      this.dispatch(changeCurrentTopic({
        section: 'monuments',
        newCurrentTopic: newTopicIndex
      }));
    } else if (elementRole === 'next') {
      this.changeCurrentItem(elementRole);
    } else if (elementRole === 'prev') {
      this.changeCurrentItem(elementRole);
    }
  }


  onDone(state) {
    this.state = state.monuments;
    this.currentTopic = this.state.currentTopicIndex;
    this.completedTopics = this.state.completedTopics;
    this.$pageBody.innerHTML = bodyRender(this.data, this.state);
  }
  changeTopic(state) {
    this.state = state.monuments;
    this.currentTopic = this.state.currentTopicIndex;
    this.currentItem = 0;

    const currentData = this.data[Object.keys(this.data)[this.currentTopic]];
    const item = currentData[this.currentItem];

    this.updateControler(item.item);
    this.$pageBody.innerHTML = bodyRender(this.data, this.state);
    this.$pageContent = getNode('.img-page__content');
  }

  updateControler(item) {
    this.$pageControler.textContent = item;
  }
  changeCurrentItem(change) {
    const currentData = this.data[Object.keys(this.data)[this.currentTopic]];
    const item = currentData[this.currentItem];

    if (change === 'next' && currentData.length > this.currentItem+1) {
      this.currentItem +=1;
    } else if (change === 'prev' && this.currentItem > 0) {
      this.currentItem -=1;
    }

    this.updateControler(item.item);
    this.$pageContent.innerHTML = itemRender(item);
  }


  async toHTML() {
    await this.setData();
    return htmlRender(this.data, this.state);
  }
}