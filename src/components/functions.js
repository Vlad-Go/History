import {Loader} from './Loader/Loader';


export const getNode = (selector) => document.querySelector(selector);
export const setHeight = () => {
  document.body.style.height = window.innerHeight + 'px';
};
export const getData = async (location) => {
  const data = await fetch(location)
      .then((response) => response.json())
      .then((data) => data);
  return data;
};
export const openModal = async (ModalConstructor, ...args) => {
  const Modal = new ModalConstructor(...args);
  document.body.insertAdjacentHTML('beforeend', await Modal.toHTML());
  Modal.init();
};


export const transitionTo = (location) => {
  const loader = new Loader();
  const renderingDelay = 950;

  new Promise((resolve, reject) => {
    loader.init();
    setTimeout(() => resolve(), renderingDelay);
  }).then(() => window.location = location);
};
export const animate = (el, css = {}, defaultcss = {}, duration = 2000) => {
  const defaultStyles = defaultcss;

  Object.keys(css).forEach((rule)=>{
    if (!Object.keys(defaultStyles)[0]) {
      defaultStyles[rule] = getComputedStyle(el)[rule];
    }
    el.style[rule] = css[rule];
  });
  setTimeout(()=>{
    Object.keys(defaultStyles).forEach((rule)=>{
      el.style[rule] = defaultStyles[rule];
    });
  }, duration);
};


export const randomNumber = (length, collection, ignore) => {
  if (collection) {
    const numbers = [];

    while (numbers.length < collection) {
      const random = Math.round(Math.random() * length);

      if (!numbers.includes(random) && random !== ignore && random < length) {
        numbers.push(random);
      }
    }
    return numbers;
  }
  return Math.floor(Math.random() * length);
};
export const randomAray = (array) => {
  const random = randomNumber(array.length, array.length);
  const newArray = [];
  array.map((elem, i)=> {
    newArray[random[i]] = elem;
  });
  array = newArray;
  return array;
};