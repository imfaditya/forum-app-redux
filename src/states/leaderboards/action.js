import { getLeaderboards } from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

const receiveLeaderboardsActionCreator = (leaderboards) => ({
  type: ActionType.RECEIVE_LEADERBOARDS,
  payload: {
    leaderboards,
  },
});

const asyncReceiveLeaderboards = () =>
  async (dispatch) => {
    try {
      const leaderboardsData = await getLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(leaderboardsData));
    } catch (error) {
      alert(error);
    }
  };

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncReceiveLeaderboards,
};
