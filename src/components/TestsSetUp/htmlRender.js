import {getData} from '../functions';


export const htmlRender = async (type) => {
  const data = await getData(`./data/${type}.json`);

  const topics = [];
  let all = 0;

  Object.keys(data).map((item)=>{
    all += data[item].length;
    topics.push(` <div class="test__item">
              <div class="test__item-title">${item}</div>
              <div class="test__item-amount">${data[item].length}</div>
              <label class="test__item-check" >
                <input  type="checkbox" data-topic='${item}'>
              </label>
            </div>`);
  });

  return `<div class="modal">
  <div class="container">
    <div class="inner modal__inner">
        <div class="modal__title">Dates</div>
        <div class="test__topics">
            <button class="test__all"  data-alltopics='all'>
              All <div class="test__item-amount 
              test__item-amount--all">${all}</div>
            </button>
            ${topics.join('')}
        </div>
        <div class="modal__controls">
          <button class="modal__btn exite"  data-role="close"></button>
          <button class="modal__btn start"  data-role="start"></button>
        </div>
    </div>
  </div>
</div>`;
};