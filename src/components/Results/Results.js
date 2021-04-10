import {AppModal} from '../../core/AppModal';
import {transitionTo} from '../functions';
import {htmlRender} from './htmlRender';

export class Results extends AppModal {
  constructor(store, results) {
    super({
      store,
      listeners: ['click'],
      className: 'modal'
    });
    this.results = results;
  }

  onClick(e) {
    const elementRole = e.target.dataset.role;
    if (elementRole === 'again') {
      document.location.reload();
      this.destroy();
    } else if (elementRole === 'done') {
      transitionTo(`#${this.results.testType}`);
      this.destroy();
    }
  }
  async toHTML() {
    return htmlRender(this.results);
  }
}