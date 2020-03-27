import { combineReducers } from 'redux';

import { article, articles, latestArticles } from './articles';
import { collapsed, loading } from './utils';

export default combineReducers({
    articles,
    article,
    collapsed,
    loading,
    latestArticles,
});