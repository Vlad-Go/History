import React from 'react';
import './Picker.scss';

const Picker = () => {
  return (
    <div className="picker">
      <div className="picker__item active">All</div>
      <div className="picker__item">art</div>
      <div className="picker__item">dates</div>
      <div className="picker__item">persons</div>
    </div>
  );
}


export default Picker;