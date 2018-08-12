import axios from 'axios';
import { createAction } from 'redux-actions';

import { API_URL } from 'apiUrl';


export const sendEnquiryStarted = createAction('SEND_ENQUIRY_STARTED');
export const sendEnquirySuccess = createAction('SEND_ENQUIRY_SUCCESS');
export const sendEnquiryError = createAction('SEND_ENQUIRY_ERROR', error => ({ error }));

export function sendEnquiry(data) {
    return dispatch => {
      dispatch(sendEnquiryStarted());
      return axios.post(API_URL + 'enquiry', data)
        .then(() => dispatch(sendEnquirySuccess()))
        .catch(error => dispatch(sendEnquiryError(error)));
    }
}