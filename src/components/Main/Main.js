import {AppComponent} from './../../core/AppComponent';
import {openModal, transitionTo} from './../functions';
import {Settings} from './../Settings/Settings';
import {htmlRender} from './htmlRender';

export class Main extends AppComponent {
  constructor(store) {
    super({
      store,
      listeners: ['click'],
      className: 'main-page'
    });
  }
  async onClick(e) {
    e.preventDefault();
    if (e.target.href) {
      transitionTo(e.target.href);
    } else if (e.target.dataset.role === 'settings') {
      await openModal(Settings, this.store);
    }
  }
  async toHTML() {
    return htmlRender();
  }
}