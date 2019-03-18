import { GET_TASK_LIST } from '../../actions/actionTypes/actionTypes';

export const taskList = (state = {}, { type, taskList }) => {
    switch (type) {
        case GET_TASK_LIST:
            return taskList;
        default:
            return state;
    }
};