import {questionRender} from './questionRender';

export const htmlRender = (state, questions) => {
  const currentQuestionIndex = 0;
  return `<div class="test-page">
  <div class="container">
    <div class="inner test-page__inner">
      <div class="test__header">
          <h1 class="title test__title">Test</h1>
          <button class="return-btn" data-role="back"></button>
      </div>
       <h2 class="test__topic">${state.topics.join(',')}</h2>
        ${questionRender(state.type, questions, currentQuestionIndex)}       
      <div class="test__footer">
        <div class="test__counter">
           ${currentQuestionIndex + 1}/${questions.length}
        </div>
        <button class="footer__btn" data-role="check">Done</button>
          <div class="line"></div>
      </div>
    </div>
  </div>
</div>`;
};