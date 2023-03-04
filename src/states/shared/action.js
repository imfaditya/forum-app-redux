import { getThreads, getUsers } from '../../utils/api';
import { receiveCategoriesActionCreator } from '../categories/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const asyncReceiveThreadsUsersCategories = () =>
  async (dispatch) => {
    try {
      const threads = await getThreads();
      const users = await getUsers();
      const listCategories = [...new Set(threads.map((thread) => thread.category))];

      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveCategoriesActionCreator(listCategories));
    } catch (error) {
      console.log(error);
    }
  };

export default asyncReceiveThreadsUsersCategories;
