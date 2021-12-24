import React from 'react';
import Progressbar from '../../common/Progressbar';

import './LearnPage.scss'
import './LearnImgPage.scss'
const LearnPage = () =>{
  return (
    <div className="app__inner learn-page">
        <div className="container">
          <div className="learn-page__header">
            <div className="learn-page__header-top">
              <div className="learn-page__title title">Topic</div>
              <div className="learn-page__controlbar">
                <button className="svg-btn learn-page__option">  
                  <svg width="24" height="12" viewBox="0 0 24 12">
                    <clipPath id="clip-8">
                      <path d="M18.6 0.619995C17.16 0.619995 15.8 1.17999 14.83 2.14999L7.8 8.39C7.16 9.03 6.31 9.38 5.4 9.38C3.53 9.38 2.01 7.87 2.01 6C2.01 4.13 3.53 2.62 5.4 2.62C6.31 2.62 7.16 2.96999 7.84 3.64999L8.97 4.64999L10.48 3.31L9.22 2.2C8.2 1.18 6.84 0.619995 5.4 0.619995C2.42 0.619995 0 3.04 0 6C0 8.96 2.42 11.38 5.4 11.38C6.84 11.38 8.2 10.82 9.17 9.85L16.2 3.60999C16.84 2.97 17.69 2.62 18.6 2.62C20.47 2.62 21.99 4.13 21.99 6C21.99 7.87 20.47 9.38 18.6 9.38C17.7 9.38 16.84 9.03 16.16 8.35L15.02 7.34L13.51 8.68L14.78 9.8C15.8 10.81 17.15 11.37 18.6 11.37C21.58 11.37 24 8.96 24 5.99C24 3.01999 21.58 0.619995 18.6 0.619995Z" />
                    </clipPath>
                    <foreignObject clipPath="url(#clip-8)">
                      <div></div>
                    </foreignObject>
                  </svg>             
                </button>
                <button className="svg-btn learn-page__option">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <clipPath id="clip-7">
                      <path fillRule="evenodd" clipRule="evenodd" d="M22 4.6665C21.4696 4.6665 20.9609 4.87722 20.5858 5.25229C20.2107 5.62736 20 6.13607 20 6.6665V7.99984H24V6.6665C24 6.13607 23.7893 5.62736 23.4142 5.25229C23.0391 4.87722 22.5304 4.6665 22 4.6665ZM24 9.33317H20V20.3332L22 23.3332L24 20.3332V9.33317Z" fill="url(#paint0_angular_795_8)"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 2V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H16.6667C17.1971 24 17.7058 23.7893 18.0809 23.4142C18.456 23.0391 18.6667 22.5304 18.6667 22V2C18.6667 1.46957 18.456 0.960859 18.0809 0.585787C17.7058 0.210714 17.1971 0 16.6667 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.960859 0 1.46957 0 2ZM9.33333 6C9.33333 5.82319 9.40357 5.65362 9.52859 5.5286C9.65362 5.40357 9.82319 5.33333 10 5.33333H15.3333C15.5101 5.33333 15.6797 5.40357 15.8047 5.5286C15.9298 5.65362 16 5.82319 16 6C16 6.17681 15.9298 6.34638 15.8047 6.4714C15.6797 6.59643 15.5101 6.66667 15.3333 6.66667H10C9.82319 6.66667 9.65362 6.59643 9.52859 6.4714C9.40357 6.34638 9.33333 6.17681 9.33333 6ZM10 8C9.82319 8 9.65362 8.07024 9.52859 8.19526C9.40357 8.32029 9.33333 8.48986 9.33333 8.66667C9.33333 8.84348 9.40357 9.01305 9.52859 9.13807C9.65362 9.2631 9.82319 9.33333 10 9.33333H15.3333C15.5101 9.33333 15.6797 9.2631 15.8047 9.13807C15.9298 9.01305 16 8.84348 16 8.66667C16 8.48986 15.9298 8.32029 15.8047 8.19526C15.6797 8.07024 15.5101 8 15.3333 8H10ZM9.33333 14.6667C9.33333 14.4899 9.40357 14.3203 9.52859 14.1953C9.65362 14.0702 9.82319 14 10 14H15.3333C15.5101 14 15.6797 14.0702 15.8047 14.1953C15.9298 14.3203 16 14.4899 16 14.6667C16 14.8435 15.9298 15.013 15.8047 15.1381C15.6797 15.2631 15.5101 15.3333 15.3333 15.3333H10C9.82319 15.3333 9.65362 15.2631 9.52859 15.1381C9.40357 15.013 9.33333 14.8435 9.33333 14.6667ZM10 16.6667C9.82319 16.6667 9.65362 16.7369 9.52859 16.8619C9.40357 16.987 9.33333 17.1565 9.33333 17.3333C9.33333 17.5101 9.40357 17.6797 9.52859 17.8047C9.65362 17.9298 9.82319 18 10 18H15.3333C15.5101 18 15.6797 17.9298 15.8047 17.8047C15.9298 17.6797 16 17.5101 16 17.3333C16 17.1565 15.9298 16.987 15.8047 16.8619C15.6797 16.7369 15.5101 16.6667 15.3333 16.6667H10ZM4 14.6667V16.6667H6V14.6667H4ZM3.33333 13.3333H6.66667C6.84348 13.3333 7.01305 13.4036 7.13807 13.5286C7.2631 13.6536 7.33333 13.8232 7.33333 14V17.3333C7.33333 17.5101 7.2631 17.6797 7.13807 17.8047C7.01305 17.9298 6.84348 18 6.66667 18H3.33333C3.15652 18 2.98695 17.9298 2.86193 17.8047C2.7369 17.6797 2.66667 17.5101 2.66667 17.3333V14C2.66667 13.8232 2.7369 13.6536 2.86193 13.5286C2.98695 13.4036 3.15652 13.3333 3.33333 13.3333V13.3333ZM7.80467 6.47133C7.92611 6.3456 7.9933 6.1772 7.99178 6.0024C7.99026 5.8276 7.92015 5.66039 7.79655 5.53679C7.67294 5.41318 7.50573 5.34307 7.33093 5.34155C7.15614 5.34003 6.98773 5.40723 6.862 5.52867L4.66667 7.724L3.80467 6.862C3.67893 6.74056 3.51053 6.67336 3.33573 6.67488C3.16093 6.6764 2.99373 6.74652 2.87012 6.87012C2.74652 6.99373 2.6764 7.16094 2.67488 7.33573C2.67337 7.51053 2.74056 7.67893 2.862 7.80467L4.66667 9.60933L7.80467 6.47133Z" fill="url(#paint1_angular_795_8)"/>
                    </clipPath>
                    <foreignObject  clipPath="url(#clip-7)">
                      <div></div>
                    </foreignObject>
                  </svg> 

                </button>
                <button className="svg-btn learn-page__option">
                  <svg  width="16" height="18" viewBox="0 0 16 18">
                    <clipPath id="clip-6">
                      <path width="24" height="24" d="M10.6667 0H1.77778C0.8 0 0.00888888 0.9 0.00888888 2L0 16C0 17.1 0.791111 18 1.76889 18H14.2222C15.2 18 16 17.1 16 16V6L10.6667 0ZM1.77778 16V2H9.77778V7H14.2222V16H1.77778ZM5.33333 5C5.33333 5.55 4.93333 6 4.44444 6C3.95556 6 3.55556 5.55 3.55556 5C3.55556 4.45 3.95556 4 4.44444 4C4.93333 4 5.33333 4.45 5.33333 5ZM5.33333 9C5.33333 9.55 4.93333 10 4.44444 10C3.95556 10 3.55556 9.55 3.55556 9C3.55556 8.45 3.95556 8 4.44444 8C4.93333 8 5.33333 8.45 5.33333 9ZM5.33333 13C5.33333 13.55 4.93333 14 4.44444 14C3.95556 14 3.55556 13.55 3.55556 13C3.55556 12.45 3.95556 12 4.44444 12C4.93333 12 5.33333 12.45 5.33333 13Z"/>
                    </clipPath>
                    <foreignObject  clipPath="url(#clip-6)">
                      <div></div>
                    </foreignObject>
                  </svg>                
                </button>
              </div>
            </div>
            <div className="learn-page__type suptitle">dates</div> 
            <Progressbar/>
          </div>
        </div>
        {/* Field */}

     </div>
  );
}


export default LearnPage;

// <!-- simple

/* <div className="learn-page__field">
<div className="learn-page__field-box">
  <div className="statement">1971</div>
  <div className="definition">Lorem ipsum</div>
</div>

<div className="counters">
  <div className="counter">1/10</div>
  <div className="repeat-counter">2x</div>
</div>
</div> */

//  -->

//  <!-- img

/* <div className="learn-page__field">
<div className="learn-page__field-box">
  <div className="img-statement">1971</div>
  <button className="info-btn btn">i</button>
</div>

<div className="counters">
  <div className="counter">1/10</div>
  <div className="repeat-counter">2x</div>
</div>
</div> */

//   -->