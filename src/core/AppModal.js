import {AppComponent} from './AppComponent';

export class AppModal extends AppComponent {
  constructor(settings) {
    super(settings);
  }
  destroy() {
    super.destroy();
    this.$root.classList.add('fadeOut');
    setTimeout(()=> this.$root.remove(), 500);
  }
}