import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

const receiveLeaderboardsActionCreator = (leaderboards) => ({
  type: ActionType.RECEIVE_LEADERBOARDS,
  payload: {
    leaderboards,
  },
});

const asyncReceiveLeaderboards = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const leaderboardsData = await api.getLeaderboards();
    dispatch(receiveLeaderboardsActionCreator(leaderboardsData));
  } catch (error) {
    alert(error);
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncReceiveLeaderboards,
};
