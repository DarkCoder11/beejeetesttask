import { combineReducers } from 'redux';
import { taskList } from '../taskListReducer/taskListReducer';

export default combineReducers({ taskList });