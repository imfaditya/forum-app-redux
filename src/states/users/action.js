import { getUsers } from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

const receiveUsersActionCreator = (users) => ({
  type: ActionType.RECEIVE_USERS,
  payload: {
    users,
  },
});

const asyncReceiveUsers = () =>
  async (dispatch) => {
    try {
      const users = await getUsers();
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      alert(error);
    }
  };

export {
  ActionType,
  receiveUsersActionCreator,
  asyncReceiveUsers,
};
