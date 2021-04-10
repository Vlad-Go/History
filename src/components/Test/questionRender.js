import {randomAray, randomNumber} from '../functions';

export const questionRender = (types, questions, currentQuestionIndex) => {
  console.log(questions);
  const imgType = ['monuments', 'personalities', 'maps', 'art', 'architecture'];
  const textType = ['dates', 'definitions'];
  const testType = textType.includes(types) ? 'text' : 'img';

  const wrongAnswers = questions.filter((q)=> {
    return q !== questions[currentQuestionIndex];
  });
  const rightAnswer = questions[currentQuestionIndex];

  const numberOfAnswers = wrongAnswers.length >= 3 ? 3 : wrongAnswers.length;
  const random =
      randomNumber(wrongAnswers.length, numberOfAnswers);

  const answer = testType === 'text' ? 'value' : 'item';
  const question = testType === 'text' ? 'definition' : 'images';

  const answers = [];
  while (answers.length < numberOfAnswers) {
    const i = answers.length;
    const randomWrongAnswer = wrongAnswers[random[i]];
    answers.push(`
      <button class="test__answer" data-answer="false" data-role="answer">
          ${randomWrongAnswer[answer]}
      </button>
    `);
  }

  answers.push(`
    <button class="test__answer" data-answer="true" data-role="answer">
    ${rightAnswer[answer]}
    </button>
  `);


  const $question = (testType === 'text') ?
  `<p class="test__question">${rightAnswer[question]}</p>` :
  `<img src=${randomAray(rightAnswer[question])[0]} class="test__img">`;


  return ` 
  <div class="test__body"> 
      ${$question}  
      ${randomAray(answers).join(' ')}
  </div>`;
};