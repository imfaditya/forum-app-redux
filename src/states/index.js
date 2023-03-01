import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import detailThreadReducer from './detailThread/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import isPreloadReducer from './isPreload/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    detailThread: detailThreadReducer,
    leaderboards: leaderboardsReducer,
    threads: threadsReducer,
    users: usersReducer,
    isPreload: isPreloadReducer,
  },
});

export default store;
