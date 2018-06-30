import axios from 'axios';
import { createAction } from 'redux-actions';

import {API_URL} from 'apiUrl';
import { formatDateRange } from 'Utilities/DateUtility';


export const fetchEventsStarted = createAction('FETCH_EVENTS_STARTED');
export const fetchEventsSuccess = createAction('FETCH_EVENTS_SUCCESS', events => ({ events }));
export const fetchEventsError = createAction('FETCH_EVENTS_ERROR', error => ({ error }));

export const fetchEventDataStarted = createAction('FETCH_EVENT_STARTED');
export const fetchEventDataSuccess = createAction('FETCH_EVENT_SUCCESS', eventData => ({ eventData }));
export const fetchEventDataError = createAction('FETCH_EVENT_ERROR', error => ({ error }));

export function fetchEvents(categoryId) {
    return dispatch => {
        dispatch(fetchEventsStarted);
        return axios.get(API_URL + 'event' + (categoryId ? '?category=' + categoryId : ''))
            .then(events => events)
            .then(response => dispatch(fetchEventsSuccess(response.data)))
            .catch(error => dispatch(fetchEventsError(error)));
    }
}

export function fetchEventData(eventSlug) {
    return dispatch => {
        dispatch(fetchEventDataStarted);
        return axios.get(API_URL + 'event' + (eventSlug ? '?slug=' + eventSlug : ''))
            .then(events => events)
            .then(response => dispatch(fetchEventDataSuccess(transformEventData(response.data[0]))))
            .catch(error => dispatch(fetchEventDataError(error)));
    }
}

function transformEventData(eventData) {
    eventData.formattedEventDate = formatDateRange(eventData.startDate, eventData.endDate);
    return eventData;
}