import { ADD_QUEST } from "../constants.js";

export const addQuest = (quest, time) => {
  const action = {
    type: ADD_QUEST,
    quest,
    time
  }
  return action;
}