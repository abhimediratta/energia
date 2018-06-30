import axios from 'axios';
import { createAction } from 'redux-actions';

import {API_URL} from 'apiUrl';


export const fetchCategoriesStarted = createAction('FETCH_CATEGORIES_STARTED');
export const fetchCategoriesSuccess = createAction('FETCH_CATEGORIES_SUCCESS', categories => ({ categories }));
export const fetchCategoriesError = createAction('FETCH_CATEGORIES_ERROR', error => ({ error }));

function fetchCategories() {
    return dispatch => {
        dispatch(fetchCategoriesStarted);
        return axios.get(API_URL + 'category')
            .then(categories => categories)
            .then(response => dispatch(fetchCategoriesSuccess(response.data)))
            .catch(error => error);
    }
}

function shouldFetchCategories(state) {
    const categories = state.category.categories;
    if (!categories || !categories.length) {
        return true;
    }
    return false;
}

export function fetchCategoriesIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchCategories(getState())) {
            return dispatch(fetchCategories());
        }
    }
}

