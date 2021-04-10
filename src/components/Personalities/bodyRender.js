import {itemRender} from './itemRender';

export const bodyRender = (data, {currentTopicIndex, completedTopics}) => {
  const title = Object.keys(data)[currentTopicIndex];
  const topics = [];
  const currentTopicData = data[Object.keys(data)[currentTopicIndex]];
  console.log(currentTopicData);
  const itemIndex = 0;
  const item = currentTopicData[itemIndex];


  Object.keys(data).map((_, i)=>{
    const doneClass = completedTopics.includes(i) ? 'done' : '';
    const activeClass = i == currentTopicIndex ? 'active' : '';
    topics.push(`
    <li class="page__topics-item ${doneClass} ${activeClass}" data-role="topic">
      ${++i}
    </li>`);
  });
  console.log(topics, currentTopicIndex);

  const topicPerCent = Math.ceil((completedTopics.length*100)/topics.length) +'%';
  return `    
  <ul class="page__topics">
     ${topics.join('')}
  </ul>
  <div class="progress page__progress">
     <div class="progress__line">
        <div class="progress__line-done" style="width:${topicPerCent}"></div>
     </div>
     <div class="progress-num">${topicPerCent}</div>
  </div>
  <h2 class="content__title">${title}</h2>
  <div class="content__toolbar">
     <label class="content__toolbar-item" for="1">Info</label>
     <label class="content__toolbar-item" for="2">Images</label>
  </div>
  <div class="img-page__content">
     ${itemRender(item)}
  </div>
  `;
};