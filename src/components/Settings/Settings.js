import {AppModal} from '../../core/AppModal';
import {LocalStoreProcessor} from '../../processors/LocalStoreProcessor';
import {htmlRender} from './htmlRender';

export class Settings extends AppModal {
  constructor(store) {
    super({
      store,
      listeners: ['click'],
      className: 'modal'
    });
  }

  onClick(e) {
    const elementRole = e.target.dataset.role;
    if (elementRole === 'clean') {
      new LocalStoreProcessor().clear();
    } else if (elementRole === 'done') {
      this.destroy();
    }
  }
  async toHTML() {
    return htmlRender();
  }
}