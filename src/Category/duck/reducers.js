import { handleActions } from 'redux-actions';

import {
    fetchCategoriesStarted,
    fetchCategoriesSuccess,
    fetchCategoriesError
} from './actions';

const defaultState = {
    isFetching: false,
    categories: [],
    error: ''
};

const CategoryReducer = handleActions(
    {
        [fetchCategoriesStarted]: (state) => {
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        },
        [fetchCategoriesSuccess]: (state, { payload: { categories } }) => {
            return {
                ...state,
                isFetching: false,
                categories
            };
        },
        [fetchCategoriesError]: (state, { payload: { error } }) => {
            return {
                ...state,
                isFetching: true,
                error: error
            }
        },
    },
    defaultState
);

export default CategoryReducer;
