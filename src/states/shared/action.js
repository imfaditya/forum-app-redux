/* eslint-disable import/no-extraneous-dependencies */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveCategoriesActionCreator } from '../categories/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const asyncReceiveThreadsUsersCategories = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const threads = await api.getThreads();
    const users = await api.getUsers();
    const listCategories = [...new Set(threads.map((thread) => thread.category))];

    dispatch(receiveThreadsActionCreator(threads));
    dispatch(receiveUsersActionCreator(users));
    dispatch(receiveCategoriesActionCreator(listCategories));
  } catch (error) {
    alert(error);
  }
  dispatch(hideLoading());
};

export default asyncReceiveThreadsUsersCategories;
