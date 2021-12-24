import React from 'react';
import Picker from '../../common/Picker';

import './StagePage.scss'

const StagePage = () =>{
  return (
    <div className="container">
      <div className="app__inner stage">
        <h1 className="stage__title title">Revising stages</h1>

        <Picker/>

        <div className="stage__list">
            <div className="stage__list-box stage__active-items active">
              <div className="stage__list-box-item">topic</div>
            </div>
            <div className="stage__list-box stage__passive-items ">
              <div className="stage__list-box-item">topic</div>
            </div>
        </div>

      </div>
    </div>
  );
}


export default StagePage;