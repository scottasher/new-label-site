import { FETCH_CURRENT } from '../../actions/types';

export const current = function (state = { active: false }, action) {
  switch (action.type) {
    case FETCH_CURRENT:
      // console.log('[FETCH_CURRENT REDUCER]', action.payload);
      return action.payload;
    default:
      return state;
  }
}
