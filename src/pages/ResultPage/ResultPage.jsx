import React from 'react';
import Progressbar from '../../common/Progressbar';

import './ResultPage.scss'

const ResultPage = () =>{
  return (
    <div className="container">
      <div className="app__inner results">
        <div className="results__header">
          <div className="results__title title">Results</div>
          
          <div className="results__controlbar">
            <button className="svg-btn results__again results__btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <clipPath id="clip-9">
                  <path d="M24 2V9C24 9.27083 23.901 9.50521 23.7031 9.70312C23.5052 9.90104 23.2708 10 23 10H16C15.5625 10 15.2552 9.79167 15.0781 9.375C14.901 8.96875 14.974 8.60938 15.2969 8.29688L17.4531 6.14062C15.9115 4.71354 14.0938 4 12 4C10.9167 4 9.88281 4.21094 8.89844 4.63281C7.91406 5.05469 7.0625 5.625 6.34375 6.34375C5.625 7.0625 5.05469 7.91406 4.63281 8.89844C4.21094 9.88281 4 10.9167 4 12C4 13.0833 4.21094 14.1172 4.63281 15.1016C5.05469 16.0859 5.625 16.9375 6.34375 17.6562C7.0625 18.375 7.91406 18.9453 8.89844 19.3672C9.88281 19.7891 10.9167 20 12 20C13.2396 20 14.4115 19.7292 15.5156 19.1875C16.6198 18.6458 17.5521 17.8802 18.3125 16.8906C18.3854 16.7865 18.5052 16.724 18.6719 16.7031C18.8281 16.7031 18.9583 16.75 19.0625 16.8438L21.2031 19C21.2969 19.0833 21.3464 19.1901 21.3516 19.3203C21.3568 19.4505 21.3177 19.5677 21.2344 19.6719C20.099 21.0469 18.724 22.112 17.1094 22.8672C15.4948 23.6224 13.7917 24 12 24C10.375 24 8.82292 23.6823 7.34375 23.0469C5.86458 22.4115 4.58854 21.5573 3.51562 20.4844C2.44271 19.4115 1.58854 18.1354 0.953125 16.6562C0.317708 15.1771 0 13.625 0 12C0 10.375 0.317708 8.82292 0.953125 7.34375C1.58854 5.86458 2.44271 4.58854 3.51562 3.51562C4.58854 2.44271 5.86458 1.58854 7.34375 0.953125C8.82292 0.317708 10.375 0 12 0C13.5312 0 15.013 0.289062 16.4453 0.867188C17.8776 1.44531 19.151 2.26042 20.2656 3.3125L22.2969 1.29688C22.599 0.973958 22.9635 0.901042 23.3906 1.07812C23.7969 1.25521 24 1.5625 24 2Z" fill="white"/>
                </clipPath>
                <foreignObject  clipPath="url(#clip-9)">
                  <div></div>
                </foreignObject>
              </svg> 

            </button>
            <button className="svg-btn results__start results__btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <clipPath id="clip-10">
                  <path d="M7.63636 14.2388L1.90909 8.59702L0 10.4776L7.63636 18L24 1.8806L22.0909 0L7.63636 14.2388Z" fill="white"/>
                </clipPath>
                <foreignObject  clipPath="url(#clip-10)">
                  <div></div>
                </foreignObject>
              </svg> 
            </button>
          </div>
      
        </div>
        <div className="results__topic suptitle">topic</div>
        <div className="results__body">
      
            <div className="results__counter">
              <div className="results__headline">21/25</div>
              <div className="results__box results__box-details">
                  <div className="results__details-item">
                    <div className="results__idicator"></div>
                    <div className="results__details-info"> theme1 -- 2</div>
                  </div>
              </div>
            </div>
      
           <Progressbar/>
      
            <div className="results__mistakes">
                <div className="results__headline">Mistakes</div>
                <div className="results__box results__box-mistakes">
                    <div className="results__mistakes-item">
                      <span className="date">860</span> - Lorem ipsum
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
}


export default ResultPage;