import {createStore, applyMiddleware} from 'redux';
import GitUserReducer from './GitRedux/userReducer.js';
import thunk from 'redux-thunk';
const store = createStore(GitUserReducer, applyMiddleware(thunk));
export default store
