import { combineReducers } from 'redux';

import CategoryReducer from './Category/duck/reducers';
import EventReducer from './Event/duck/reducers';
import EnquiryReducer from './Enquiry/duck/reducer';

const rootReducer = combineReducers({
  category: CategoryReducer,
  event: EventReducer,
  enquiry: EnquiryReducer
});

export default rootReducer;