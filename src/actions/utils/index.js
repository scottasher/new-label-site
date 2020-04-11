import { FETCH_COLLAPSED, FETCH_LOADING, FETCH_CURRENT } from '../types';
import { createAlert } from '../../utils/alerts';
import request from '../../utils/request';
import { setToken } from '../../utils/authority';

const { REACT_APP_EMAIL, REACT_APP_PASS } = process.env;

export const fetchToken = () => async dispatch => {
    const tok = await request('/users/login', {
        method: 'post',
        data: { user: {
            email: REACT_APP_EMAIL,
            password: REACT_APP_PASS
        }}
    });

    setToken(tok.data.user.token);
}

export const fetchCurrent = () => async dispatch => {
    const res = await request('/users/current', {
        method: 'get',
    });

    dispatch({ type: FETCH_CURRENT, payload: res.data.user })
};

export const sideCollapse = values => dispatch => {
    dispatch({ type: FETCH_COLLAPSED, payload: values });
};

export const contactUs = values => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true })
    const res = await request('/contact', {
        method: 'post',
        data: { contact: values }
    }); 

    createAlert(res.data)
    dispatch({ type: FETCH_LOADING, payload: false })
};

export const mailingListSignUp = value => async dispatch => {
    const res = await request('/mail/sign-up', {
        method: 'post',
        data: { email: value }
    }); 

    createAlert(res.data)
}