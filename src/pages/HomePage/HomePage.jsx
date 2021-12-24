import React from 'react';
import Progressbar from '../../common/Progressbar';

import './HomePage.scss'

const HomePage = () =>{
  return (
    <div className="container">
      <div className="app__inner homepage">
        <Progressbar/>
        <div className="stats">
          <div className="stats__item">
            <div className="stats__item-label">Revising</div>
            <div className="stats__item-value">300</div>
          </div>
          <div className="stats__item">
            <div className="stats__item-label">R streak:</div>
            <div className="stats__item-value">30</div>
          </div>
          <div className="stats__item">
            <div className="stats__item-label">G streak:</div>
            <div className="stats__item-value">30</div>
          </div>
        </div>
        <div className="streak">
          <div className="streak__label">Day streak</div>
          <div className="streak__bar">
            <div className="streak__bar-item done"></div>
            <div className="streak__bar-item done"></div>
            <div className="streak__bar-item done"></div>
            <div className="streak__bar-item done">4</div>
            <div className="streak__bar-item"></div>
            <div className="streak__bar-item"></div>
            <div className="streak__bar-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default HomePage;