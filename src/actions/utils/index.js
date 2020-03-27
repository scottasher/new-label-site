import { FETCH_COLLAPSED, FETCH_LOADING } from '../types';
import { createAlert } from '../../utils/alerts';
import request from '../../utils/request';

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