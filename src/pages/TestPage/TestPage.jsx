import React from 'react';
import Progressbar from '../../common/Progressbar';


import './TestPage.scss'

const TestPage = () =>{
  return (
    <div className="container">
      <div className="app__inner test-page">

          <div className="test-page__header">
            <h1 className="test-page__title title">Topic</h1>
            <h2 className="test-page__type suptitle">dates</h2> 
            <div className="test-page__header-bottom">
              <div className="test-page__timer">00:56</div>
              <Progressbar/>
            </div>
          </div>


        <div className="test-page__field">
          <div className="question">
            Lorem ipsumm Lorem ipsumm L
            orem ipsumm
          </div> 
          <div className="answers">
            <div className="answers__item">860</div>
            <div className="answers__item">860</div>
            <div className="answers__item">944</div>
            <div className="answers__item">1113</div>
          </div> 
        </div>

        <div className="counters">
          <div className="counter">1/10</div>
        </div>    
      </div>
    </div>
  );
}


export default TestPage;