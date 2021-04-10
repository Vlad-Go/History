import * as actions from './types';


export const startTest = (data) => {
  return {
    type: actions.StartTest,
    data
  };
};
export const changeCurrentTopic = (data) => {
  return {
    type: actions.ChangeCurrentTopic,
    data
  };
};
export const completeTopic = (data) => {
  return {
    type: actions.CompleteTopic,
    data
  };
};