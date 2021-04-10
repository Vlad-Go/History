import {bodyRender} from './bodyRender';

export const htmlRender = (data, state) => {
  return `
  <div class="page text-page">
    <div class="container">
      <div class="page__inner">
        <div class="page__header">
            <h1 class="title page__title">Dates</h1>
            <button class="return-btn" data-role="back"></button>
        </div>
        <div class="page__body">
          ${bodyRender(data, state)}
        </div> 
        <div class="page__footer">
          <button class="footer__btn" data-role="test">Test</button>
          <button class="footer__btn" data-role="done">Done</button>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>`;
};