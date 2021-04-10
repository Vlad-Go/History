import {DomListener} from './DomListener';

export class AppComponent extends DomListener {
  constructor(options) {
    super(options.listeners, options.className);
    this.options = options;
    this.store = options.store;
    this.$root;
    this.child;
    this.elements;
  }
  init() {
    console.log(this.options);
    this.initListeners();
    this.$root = document.querySelector('.' + this.options.className);
  }
  beforeInit() {}
  destroy() {
    this.destroyListeners();
  }
  update(html) {
    this.$root.innerHTML = html;
  }

  subscribe(event, fn) {
    this.store.subscribe(event, fn);
  }
  unsubscribe(fn) {
    this.store.unsubscribe(fn);
  }
  dispatch(action) {
    this.store.dispatch(action);
  }
  getState(acurrateLocation) {
    return this.store.getState(acurrateLocation);
  }

  // ----------- test-mode
  insertHTML(elem) {
    // #! check func for if statement
    if (typeof elem === 'string' || elem instanceof HTMLElement) {
      this.child = elem;
    } else if (elem[0] instanceof AppComponent) {
      const html = [];
      elem.forEach((Component) => {
        html.push(Component.templete);
      });
      this.child = html.join(' ');
    } else {
      throw new Error(`type of ${elem} isn't suported`);
    }
    return this;
  }
  insertComponent(elements = {}) {
    // #! check func for if statement
    if (Object.keys(elements).length === 0 &&
        elements.constructor === Object) {
      return this;
    }
    if (elements[Object.keys(elements)[0]] == null) {
      return this;
    }
    Object.keys(elements).map((key) => {
      const Component = elements[key];
      elements[key] = new Component(this.store);
    });
    this.elements = elements;
    return this;
  }
    // ---|----|----|-----|
}