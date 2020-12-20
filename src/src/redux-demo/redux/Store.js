import {createStore, combineReducers, applyMiddleware} from 'redux';
import cakeReducer from './cake/CakeReducer.js';
import iceCreamReducer from './IceCream/IceCreamReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './user/userReducer.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const rootReducer = combineReducers({cakeReducer: cakeReducer, iceCreamReducer: iceCreamReducer, userReducer: userReducer})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
//const store = createStore(cakeReducer);
export default store
