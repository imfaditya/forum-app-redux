import { getThreads, getUsers } from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const asyncReceiveThreadsAndUsers = () =>
  async (dispatch) => {
    try {
      const threads = await getThreads();
      const users = await getUsers();

      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      console.log(error);
    }
  };

export default asyncReceiveThreadsAndUsers;
