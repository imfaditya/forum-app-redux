import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
  SET_PRELOAD: 'SET_PRELOAD',
};

const setPreloadActionCreator = (isPreload) => ({
  type: ActionType.SET_PRELOAD,
  payload: {
    isPreload,
  },
});

const asyncSetPreload = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const authUser = await api.getAuthUserProfile();
    dispatch(setAuthUserActionCreator(authUser));
  } catch (error) {
    dispatch(setAuthUserActionCreator(null));
  } finally {
    dispatch(setPreloadActionCreator(false));
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  setPreloadActionCreator,
  asyncSetPreload,
};
