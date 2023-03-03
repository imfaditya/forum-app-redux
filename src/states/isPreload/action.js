import { getAuthUserProfile } from '../../utils/api';
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

const asyncSetPreload = () =>
  async (dispatch) => {
    try {
      const authUser = await getAuthUserProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setPreloadActionCreator(false));
    }
  };

export {
  ActionType,
  setPreloadActionCreator,
  asyncSetPreload,
};
