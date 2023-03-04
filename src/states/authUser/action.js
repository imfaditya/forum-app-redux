import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getAuthUserProfile, login, putAccessToken } from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser) => ({
  type: ActionType.SET_AUTH_USER,
  payload: {
    authUser,
  },
});

const unsetAuthUserActionCreator = () => ({
  type: ActionType.UNSET_AUTH_USER,
  payload: {
    authUser: null,
  },
});

const asyncSetAuthUser = ({ email, password }) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await login({ email, password });
      putAccessToken(token);
      const authUser = await getAuthUserProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

export {
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  ActionType,
};
