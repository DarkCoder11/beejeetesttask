import { GET_TASK_LIST } from '../actionTypes/actionTypes';

const sendTaskListToStore = taskList => {
  return {
    type: GET_TASK_LIST,
    taskList
  }
};

export default sendTaskListToStore;