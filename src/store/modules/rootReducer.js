import {combineReducers} from 'redux';

import hero from './heros/reducer';

export default combineReducers({
  hero,
});
