import {bodyRender} from './bodyRender';


export const htmlRender = (data, state) => {
  const currentTopic = Object.keys(data)[state.currentTopicIndex];
  const firstMonument = data[currentTopic][0].item;
  return `
      <div class="page img-page">
      <div class="container">
          <div class="page__inner">

            <div class="page__header">
                <h1 class="title page__title">Maps</h1>
                <button class="return-btn" data-role="back"></button>
            </div>

            <div class="page__body img-page__body">
                ${bodyRender(data, state)}
            </div>

              <div class="page__controler">
                  <button class="controler__btn" data-role="prev"></button>
                  <span class="controler__title" >${firstMonument}</span>
                  <button class="controler__btn" data-role="next"></button>
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