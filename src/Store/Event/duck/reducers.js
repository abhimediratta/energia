import { handleActions } from 'redux-actions';

import {
    fetchEventsStarted,
    fetchEventsSuccess,
    fetchEventsError
} from './actions';

const defaultState = {
    isFetching: false,
    events: [],
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
                events: events
            };
        },
        [fetchEventsError]: (state, { payload: { error } }) => {
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
