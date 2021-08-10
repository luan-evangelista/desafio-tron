import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '././rootReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reactoTron from '../config/ReactotronConfig';

const middlewares = applyMiddleware(thunk, promise);
const store = createStore(
  rootReducer,
  middlewares,
);

export default store;
