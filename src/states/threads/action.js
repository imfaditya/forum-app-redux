import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  addThread,
  downVoteThread, unVoteThread, upVoteThread,
} from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  UNVOTE_THREAD: 'UNVOTE_THREAD',
};

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREAD,
  payload: {
    thread,
  },
});

const upVoteThreadActionCreator = (userId, threadId) => ({
  type: ActionType.UP_VOTE_THREAD,
  payload: {
    userId,
    threadId,
  },
});

const downVoteThreadActionCreator = (userId, threadId) => ({
  type: ActionType.DOWN_VOTE_THREAD,
  payload: {
    userId,
    threadId,
  },
});

const unVoteThreadActionCreator = (userId, threadId) => ({
  type: ActionType.UNVOTE_THREAD,
  payload: {
    userId,
    threadId,
  },
});

const asyncUpVoteThread = (userId, threadId) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(unVoteThreadActionCreator(userId, threadId));
      dispatch(upVoteThreadActionCreator(userId, threadId));
      await upVoteThread(threadId);
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

const asyncDownVoteThread = (userId, threadId) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(unVoteThreadActionCreator(userId, threadId));
      dispatch(downVoteThreadActionCreator(userId, threadId));
      await downVoteThread(threadId);
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

const asyncUnVoteThread = (userId, threadId) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(unVoteThreadActionCreator(userId, threadId));
      await unVoteThread(threadId);
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

const asyncAddThread = (thread) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadData = await addThread(thread);
      dispatch(addThreadActionCreator(threadData));
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

export {
  receiveThreadsActionCreator,
  addThreadActionCreator,
  ActionType,
  unVoteThreadActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  asyncDownVoteThread,
  asyncUpVoteThread,
  asyncUnVoteThread,
  asyncAddThread,
};
