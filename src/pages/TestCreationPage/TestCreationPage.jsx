import React from 'react';
import Picker from '../../common/Picker';


import './TestCreationPage.scss'

const TestCreationPage = () =>{
  return (
    <div className="container">
      <div className="app__inner test-creation">
        <h1 className="test-creation__title title">Create Test</h1>
        <Picker/>
        <div className="test-creation__form">
          <div className="test-creation__form-box">
            <div className="test-creation__form-item topics">
              <label className="topics__input">
                <input type="checkbox" name="topic"/>
                topic
              </label>
            </div>
            <div className="test-creation__form-item types">
              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>
              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>
              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>
              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>
              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>

              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>
              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>
              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>
              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>

              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>
              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>
              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>
              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>

              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>
              <label className="types__input">
                <input type="radio" name="type"/>
                type
              </label>
            </div>
          </div>
          <button className="btn test-creation__form-btn">Create</button>
        </div>

      </div>
    </div>
  );
}


export default TestCreationPage;