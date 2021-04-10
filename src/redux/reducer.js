import * as actions from './types';

export const reducer = (state, action) => {
  let newState;
  let location;
  switch (action.type) {
    case actions.StartTest:
      newState = state;
      newState.test.type = action.data.type;
      newState.test.topics = action.data.topics;
      return {...newState};
    case actions.ChangeCurrentTopic:
      location = action.data.section;
      newState = state;
      newState[location].currentTopicIndex = action.data.newCurrentTopic;
      return {...newState};
    case actions.CompleteTopic:
      location = action.data.section;
      newState = state;
      if (newState[location].completedTopics.includes(action.data.topic)) {
        return {...state};
      } else {
        newState[location].completedTopics.push(action.data.topic);
        return {...newState};
      }
    default: return state;
  }
};