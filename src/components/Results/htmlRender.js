export const htmlRender = async (result) => {
  const imgType = ['monuments', 'personalities', 'maps', 'art', 'architecture'];
  const textType = ['dates', 'definitions'];
  const testType = textType.includes(result.testType) ? 'text' : 'img';

  const answer = testType === 'text' ? 'value' : 'item';
  const question = testType === 'text' ? 'definition' : 'images';

  const rightAnswers = result.questionsAmount-result.wrongAnswers.length;
  const results = `${rightAnswers}/ ${result.questionsAmount}`;
  const percent = Math.floor((100 * rightAnswers)/result.questionsAmount);
  const details = [];


  let mistakes = result.wrongAnswers;
  mistakes = mistakes.map((mistake)=>{
    if (testType === 'text') {
      return `
      <div class="results__mistakes-item">
            <span class="date">${mistake[answer]}</span> - ${mistake[question]}
      </div>`;
    } else {
      return `
      <div class="results__mistakes-item--img">
        <img src="${mistake[question][0]}"> <span>${mistake[answer]}</span>
      </div>`;
    }
  });

  return ` <div class="modal">
  <div class="container">
    <div class="inner modal__inner">
        <div class="modal__title">Results</div>
        <div class="results__body">
            <div class="results__counter">
              <div class="results__headline">${results}</div>
              <div class="results__box results__box-details">
                  ${details.join(' ')}
                  <div class="results__details-item">
                    <div class="results__idicator"></div>
                    <div class="results__details-info"> topic1 -- 2</div>
                  </div>
                  <div class="results__details-item">
                  <div class="results__idicator"></div>
                  <div class="results__details-info"> topic1 -- 2</div>
                </div>
                <div class="results__details-item">
                <div class="results__idicator"></div>
                <div class="results__details-info"> topic1 -- 2</div>
              </div>
              <div class="results__details-item">
              <div class="results__idicator"></div>
              <div class="results__details-info"> topic1 -- 2</div>
            </div>
              </div>
            </div>
            <div class="results__progress">
             <div class="progress__line">
              <div class="progress__line-done" style="width:${percent}%"></div>
             </div>
             <div class="progress-num">${percent}%</div>
            </div>
            <div class="results__mistakes">
              <div class="results__headline">Mistakes</div>    
              <div class="results__box results__box-mistakes">
               ${mistakes.join(' ') || '<span class ="without">Clearly!</span>'}
              </div>
            </div>
        </div>
        <div class="modal__controls">
          <button class="modal__btn again" data-role="again"></button>
          <button class="modal__btn start" data-role="done"></button>
        </div>
    </div>
  </div>
</div>`;
};