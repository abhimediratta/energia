import axios from 'axios';
import { createAction } from 'redux-actions';

import {API_URL} from 'apiUrl';


export const fetchEventsStarted = createAction('FETCH_EVENTS_STARTED');
export const fetchEventsSuccess = createAction('FETCH_EVENTS_SUCCESS', events => ({ events }));
export const fetchEventsError = createAction('FETCH_EVENTS_ERROR', error => ({ error }));

export function fetchEvents(categoryId) {
    return dispatch => {
        dispatch(fetchEventsStarted);
        return axios.get(API_URL + 'event' + (categoryId ? '?category=' + categoryId : ''))
            .then(events => events)
            .then(response => dispatch(fetchEventsSuccess(response.data)))
            .catch(error => error);
    }
}

