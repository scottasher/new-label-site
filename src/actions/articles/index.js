import request from '../../utils/request';
import {
    FETCH_ARTICLES,
    FETCH_ARTICLE,
    FETCH_LATEST_ARTICLES,
    FETCH_LOADING,
} from '../types';

export const fetchArticles = () => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true });

    const res = await request('/articles?status=public', {
        method: 'get',
    });
    // console.log(res)
    dispatch({ type: FETCH_ARTICLES, payload: res.data });
    dispatch({ type: FETCH_LOADING, payload: false });
};

export const fetchArticle = (values, history) => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true });

    const res = await request(`/articles/${values}`, {
        method: 'get',
    });
    if(!res.data.article) {
        history.push(res.data.redirect)
    }
    dispatch({ type: FETCH_ARTICLE, payload: res.data });
    dispatch({ type: FETCH_LOADING, payload: false });
};

export const fetchLatestArticles = (value) => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true });

    const res = await request(`/articles?count=4&status=public`, {
        method: 'get',
    });

    dispatch({ type: FETCH_LATEST_ARTICLES, payload: res.data });
    dispatch({ type: FETCH_LOADING, payload: false });
};