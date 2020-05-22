import { FETCH_LATEST_ARTICLES } from '../../actions/types';

export const latestArticles = function (state = [], action) {
  switch (action.type) {
    case FETCH_LATEST_ARTICLES:
      // console.log('[FETCH_LATEST_ARTICLES REDUCER]', action.payload);
      return action.payload;
    default:
      return state;
  }
}