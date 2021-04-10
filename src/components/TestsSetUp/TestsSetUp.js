import {AppModal} from '../../core/AppModal';
import {startTest} from '../../redux/actions';
import {transitionTo} from '../functions';
import {htmlRender} from './htmlRender';

export class TestsSetUp extends AppModal {
  constructor(store, type) {
    super({
      store,
      listeners: ['click'],
      className: 'modal'
    });
    this.type = type;
    this.chekedTopics = [];
  }
  init() {
    super.init();
    this.dispatch(startTest([]));
  }
  startTest() {
    transitionTo('#test');
    this.destroy();
  }

  onClick(e) {
    const elementRole = e.target.dataset;
    if (elementRole.role === 'close') {
      this.destroy();
    } else if (elementRole.role === 'start' && this.chekedTopics[0]) {
      const testObj = {
        type: this.type,
        topics: this.chekedTopics
      };
      this.dispatch(startTest(testObj));
      this.startTest();
    } else if (elementRole.topic) {
      const topic = elementRole.topic;

      if (!this.chekedTopics.includes(topic) && e.target.checked == true) {
        this.chekedTopics.push(topic);
      } else {
        this.chekedTopics = this.chekedTopics.filter((item) => item !== topic);
      }
    } else if (elementRole.alltopics) {
      console.log(elementRole.alltopics);
      const testObj = {
        type: this.type,
        topics: elementRole.alltopics
      };
      this.dispatch(startTest(testObj));
      this.startTest();
    }
  }
  async toHTML() {
    return htmlRender(this.type);
  }
}