import { combineReducers } from 'redux';

import CategoryReducer from './Category/duck/reducers';
import EventReducer from './Event/duck/reducers';

const rootReducer = combineReducers({
  category: CategoryReducer,
  event: EventReducer
});

export default rootReducer;