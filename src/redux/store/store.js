import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from './history';
import reducer from '../reducers/index';

const enhancer = applyMiddleware(routerMiddleware(history), thunk);
const store = createStore(reducer, composeWithDevTools(enhancer));
export default store;
