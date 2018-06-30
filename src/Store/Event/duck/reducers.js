import { handleActions } from 'redux-actions';

import {
    fetchEventsStarted,
    fetchEventsSuccess,
    fetchEventsError,
    fetchEventDataStarted,
    fetchEventDataSuccess,
    fetchEventDataError
} from './actions';

const defaultState = {
    isFetching: false,
    all: [],
    eventData: {},
    error: ''
};

const EventReducer = handleActions(
    {
        [fetchEventsStarted]: (state) => {
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        },
        [fetchEventsSuccess]: (state, { payload: { events } }) => {
            return {
                ...state,
                isFetching: false,
                all: events
            };
        },
        [fetchEventsError]: (state, { payload: { error } }) => {
            return {
                ...state,
                isFetching: true,
                error: error
            }
        },

        [fetchEventDataStarted]: (state) => {
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        },
        [fetchEventDataSuccess]: (state, { payload: { eventData } }) => {
            return {
                ...state,
                isFetching: false,
                eventData: eventData
            };
        },
        [fetchEventDataError]: (state, { payload: { error } }) => {
            return {
                ...state,
                isFetching: true,
                error: error
            }
        },
    },
    defaultState
);

export default EventReducer;
