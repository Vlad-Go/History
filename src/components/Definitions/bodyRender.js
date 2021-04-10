export const bodyRender = (data, {currentTopicIndex, completedTopics}) => {
  const title = Object.keys(data)[currentTopicIndex];
  const topics = [];
  const infoItems = [];

  Object.keys(data).map((_, i)=>{
    console.log(completedTopics.includes(i), '  ---1');
    const doneClass = completedTopics.includes(i) ? 'done' : '';
    const activeClass = i === currentTopicIndex ? 'active' : '';
    topics.push(`
    <li class="page__topics-item ${doneClass} ${activeClass}" data-role="topic">
      ${++i}
    </li>`);
  });

  data[Object.keys(data)[currentTopicIndex]].map((elem) =>{
    infoItems.push(` 
    <div class="content__item">
      <p class="content__item-year">${elem.value}</p>
      <p class="content__item-definition"> - ${elem.definition}</p>
    </div>`);
  });


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
      <div class="text-page__content">
        ${infoItems.join('')}
      </div>`;
};