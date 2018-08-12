import axios from 'axios';
import { createAction } from 'redux-actions';

import {API_URL} from 'apiUrl';


export const fetchCategoriesStarted = createAction('FETCH_CATEGORIES_STARTED');
export const fetchCategoriesSuccess = createAction('FETCH_CATEGORIES_SUCCESS', categories => ({ categories }));
export const fetchCategoriesError = createAction('FETCH_CATEGORIES_ERROR', error => ({ error }));

export const fetchCategoryStarted = createAction('FETCH_CATEGORY_STARTED');
export const fetchCategorySuccess = createAction('FETCH_CATEGORY_SUCCESS', category => ({ category }));
export const fetchCategoryError = createAction('FETCH_CATEGORY_ERROR', error => ({ error }));

export const fetchCategoryInsightsStarted = createAction('FETCH_CATEGORY_INSIGHTS_STARTED');
export const fetchCategoryInsightsSuccess = createAction('FETCH_CATEGORY_INSIGHTS_SUCCESS', insights => ({ insights }));
export const fetchCategoryInsightsError = createAction('FETCH_CATEGORY_INSIGHTS_ERROR', error => ({ error }));

function fetchCategories() {
    return dispatch => {
        dispatch(fetchCategoriesStarted());
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

export function fetchCategory(sectorId) {
    return dispatch => {
        dispatch(fetchCategoryStarted);
        return axios.get(API_URL + 'category/' + sectorId)
            .then(category => category)
            .then(response => dispatch(fetchCategorySuccess(response.data)))
            .catch(error => error);
    }
}

export function fetchCategoryInsights(sectorId) {
    return dispatch => {
        dispatch(fetchCategoryInsightsStarted);
        return axios.get(API_URL + 'eventinsight/category/' + sectorId)
            .then(insights => insights)
            .then(response => dispatch(fetchCategoryInsightsSuccess(response.data)))
            .catch(error => error);
    }
}