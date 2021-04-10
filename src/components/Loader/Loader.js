
export class Loader {
  constructor() {
    this.$root = document.querySelector('.loader');
  }
  init() {
    this.$root.classList.add('active');
    setTimeout(()=>{
      this.$root.classList.remove('active');
    }, 1800);
  }
}