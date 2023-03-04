import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import detailThreadReducer from './detailThread/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import isPreloadReducer from './isPreload/reducer';
import categoriesReducer from './categories/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    detailThread: detailThreadReducer,
    leaderboards: leaderboardsReducer,
    threads: threadsReducer,
    users: usersReducer,
    isPreload: isPreloadReducer,
    categories: categoriesReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
