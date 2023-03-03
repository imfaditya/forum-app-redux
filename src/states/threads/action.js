import {
  downVoteThread, getThreads, unVoteThread, upVoteThread,
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

const asyncReceiveThreads = () =>
  async (dispatch) => {
    try {
      const threads = await getThreads();
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error);
    }
  };

const asyncUpVoteThread = (userId, threadId) =>
  async (dispatch) => {
    try {
      dispatch(unVoteThreadActionCreator(userId, threadId));
      dispatch(upVoteThreadActionCreator(userId, threadId));
      await upVoteThread(threadId);
    } catch (error) {
      console.log(error);
    }
  };

const asyncDownVoteThread = (userId, threadId) =>
  async (dispatch) => {
    try {
      dispatch(unVoteThreadActionCreator(userId, threadId));
      dispatch(downVoteThreadActionCreator(userId, threadId));
      await downVoteThread(threadId);
    } catch (error) {
      console.log(error);
    }
  };

const asyncUnVoteThread = (userId, threadId) =>
  async (dispatch) => {
    try {
      dispatch(unVoteThreadActionCreator(userId, threadId));
      await unVoteThread(threadId);
    } catch (error) {
      console.log(error);
    }
  };

export {
  receiveThreadsActionCreator,
  addThreadActionCreator,
  ActionType,
  asyncReceiveThreads,
  unVoteThreadActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  asyncDownVoteThread,
  asyncUpVoteThread,
  asyncUnVoteThread,
};
