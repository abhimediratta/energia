import { handleActions } from 'redux-actions';

import {
    fetchCategoriesStarted,
    fetchCategoriesSuccess,
    fetchCategoriesError,
    fetchCategoryStarted,
    fetchCategorySuccess,
    fetchCategoryError
} from './actions';

const defaultState = {
    isFetching: false,
    categories: [],
    category: {},
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

        [fetchCategoryStarted]: (state) => {
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        },
        [fetchCategorySuccess]: (state, { payload: { category } }) => {
            return {
                ...state,
                isFetching: false,
                category
            };
        },
        [fetchCategoryError]: (state, { payload: { error } }) => {
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
