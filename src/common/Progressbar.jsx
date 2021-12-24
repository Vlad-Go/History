import React from 'react';
import './Progressbar.scss';


const Progressbar = () =>{
  return (
    <div className="progressbar">
      <div className="bar">
        <div className="progress">
          <div className="current">8</div>
        </div>
        <div className="total">27</div>
      </div>
      <div className="percentage">30%</div>
    </div>
  );
}


export default Progressbar;