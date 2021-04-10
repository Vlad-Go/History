import {getStore} from './core/store/store';
import {Router} from './core/Router';
import {setHeight} from './components/functions';

export class App {
  constructor(components = [], $root) {
    this.components = components;
    this.$root = $root;
    this.store = getStore();
    this.router = new Router();
  }
  route() {
    this.render();
    window.addEventListener('hashchange', this.render.bind(this));
  }
  render() {
    // if the page exists - destroy her
    if (this.Page) this.destroy();
    this.router.route();

    let isPage = false;
    this.components.forEach(({component: Component, hash}) => {
      if (hash === this.router.currentHash) {
        isPage = true;
        this.Page = new Component(this.store);
      }
    });
    if (!isPage) window.location.hash = '#home';


    this.Page.toHTML()
        .then((html)=>{
          this.$root.innerHTML = html;
          this.Page.beforeInit();
          this.init();
        });
  }


  init() {
    window.addEventListener('resize', setHeight);
    setHeight();
    this.Page.init();
  }
  destroy() {
    this.Page.destroy();
  }
}