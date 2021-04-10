export class DomListener {
  constructor(listeners = [], className) {
    this.listeners = listeners;
    this.rootClassName = className;
  }
  initListeners() {
    this.$root = document.querySelector(`.${this.rootClassName}`);
    this.listeners.forEach((listener) => {
      const callback = getFuncName(listener);
      if (!this[callback]) {
        throw new Error(`You don't create callback ${callback} 
                         in ${this.name}`);
      }
      this[callback] = this[callback].bind(this);
      if (listener === 'resize') {
        window.addEventListener(listener, this[callback]);
      } else {
        this.$root.addEventListener(listener, this[callback]);
      }
    });
  }
  destroyListeners() {
    console.log(this.rootClassName, 'destroyed');
    this.listeners.forEach((listener) => {
      const callback = getFuncName(listener);
      this.$root.removeEventListener(listener, this[callback]);
    });
  }
}

const getFuncName = (listener) => {
  const CapitalLetter = listener[0].toUpperCase();
  return 'on' + CapitalLetter +listener.slice(1);
};