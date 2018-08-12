import { handleActions } from 'redux-actions';

import {
    sendEnquiryStarted,
    sendEnquirySuccess,
    sendEnquiryError
} from './actions';

const defaultState = {
  isSendingData: false,
  error: ''
};

const EnquiryReducer = handleActions(
    {
        [sendEnquiryStarted]: (state) => {
            return {
                ...state,
                isSendingData: true,
                error: ''
            }
        },
        [sendEnquirySuccess]: (state) => {
            return {
                ...state,
                isSendingData: false
            };
        },
        [sendEnquiryError]: (state, { payload: { error } }) => {
            return {
                ...state,
                isSendingData: false,
                error
            }
        },
    },
    defaultState
);

export default EnquiryReducer;
