import {getHash} from './helpFunctions';

export class Router {
  constructor() {
    this.currentHash = 'home';
  }
  route() {
    this.currentHash = getHash();
  }
}