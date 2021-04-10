import './scss/style.scss';
import {App} from './App';
import {Main} from './components/Main/Main';
import {Test} from './components/Test/Test';
import {Dates} from './components/Dates/Dates';
import {Monuments} from './components/Monuments/Monuments';
import {getNode} from './components/functions';
import {Definitions} from './components/Definitions/Definitions';
import {Personalities} from './components/Personalities/Personalities';
import {Arts} from './components/Arts/Arts';
import {Maps} from './components/Maps/Maps';
import {Architecture} from './components/Architecture/Architecture';
// Components -->

// ----------- || ----- || ------------

const $root = getNode('.app');

new App([
  {component: Main, hash: 'home'},
  {component: Dates, hash: 'dates'},
  {component: Definitions, hash: 'definitions'},
  {component: Architecture, hash: 'architecture'},
  {component: Arts, hash: 'arts'},
  {component: Maps, hash: 'maps'},
  {component: Personalities, hash: 'personalities'},
  {component: Monuments, hash: 'monuments'},
  {component: Test, hash: 'test'}
], $root).route();