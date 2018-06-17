import { combineReducers } from 'redux';

import CategoryReducer from '../Category/duck/reducers';

const rootReducer = combineReducers({
  category: CategoryReducer
});

export default rootReducer;