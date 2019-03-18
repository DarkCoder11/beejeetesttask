import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/rootReducer/rootReducer';

export const store = createStore(reducers, applyMiddleware(thunk));