import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  addComment,
  downVoteComment,
  downVoteThread, getDetailThread, unVoteComment, unVoteThread, upVoteComment, upVoteThread,
} from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
  CLEAR_DETAIL_THREAD: 'CLEAR_DETAIL_THREAD',
  ADD_COMMENT: 'ADD_COMMENT',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  UNVOTE_COMMENT: 'UNVOTE_COMMENT',
  UP_VOTE_DETAIL_THREAD: 'UP_VOTE_DETAIL_THREAD',
  DOWN_VOTE_DETAIL_THREAD: 'DOWN_VOTE_DETAIL_THREAD',
  UNVOTE_DETAIL_THREAD: 'UNVOTE_DETAIL_THREAD',
};

const receiveDetailThreadActionCreator = (detailThread) => ({
  type: ActionType.RECEIVE_DETAIL_THREAD,
  payload: {
    detailThread,
  },
});

const clearDetailThreadActionCreator = () => ({
  type: ActionType.CLEAR_DETAIL_THREAD,
});

const addCommentActionCreator = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    comment,
  },
});

const upVoteCommentActionCreator = (userId, commentId) => ({
  type: ActionType.UP_VOTE_COMMENT,
  payload: {
    userId,
    commentId,
  },
});

const downVoteCommentActionCreator = (userId, commentId) => ({
  type: ActionType.DOWN_VOTE_COMMENT,
  payload: {
    userId,
    commentId,
  },
});

const unVoteCommentActionCreator = (userId, commentId) => ({
  type: ActionType.UNVOTE_COMMENT,
  payload: {
    userId,
    commentId,
  },
});

const upVoteDetailThreadActionCreator = (userId, threadId) => ({
  type: ActionType.UP_VOTE_DETAIL_THREAD,
  payload: {
    userId,
    threadId,
  },
});

const downVoteDetailThreadActionCreator = (userId, threadId) => ({
  type: ActionType.DOWN_VOTE_DETAIL_THREAD,
  payload: {
    userId,
    threadId,
  },
});

const unVoteDetailThreadActionCreator = (userId, threadId) => ({
  type: ActionType.UNVOTE_DETAIL_THREAD,
  payload: {
    userId,
    threadId,
  },
});

const asyncReceiveDetailThread = (threadId) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(clearDetailThreadActionCreator());
      const detailThread = await getDetailThread(threadId);
      dispatch(receiveDetailThreadActionCreator(detailThread));
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

const asyncUpVoteDetailThread = (userId, threadId) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(unVoteDetailThreadActionCreator(userId));
      dispatch(upVoteDetailThreadActionCreator(userId));
      await upVoteThread(threadId);
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

const asyncDownVoteDetailThread = (userId, threadId) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(unVoteDetailThreadActionCreator(userId));
      dispatch(downVoteDetailThreadActionCreator(userId));
      await downVoteThread(threadId);
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

const asyncUnVoteDetailThread = (userId, threadId) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(unVoteDetailThreadActionCreator(userId));
      await unVoteThread(threadId);
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

const asyncUpVoteComment = (userId, threadId, commentId) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(unVoteCommentActionCreator(userId, commentId));
      dispatch(upVoteCommentActionCreator(userId, commentId));
      await upVoteComment(threadId, commentId);
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

const asyncDownVoteComment = (userId, threadId, commentId) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(unVoteCommentActionCreator(userId, commentId));
      dispatch(downVoteCommentActionCreator(userId, commentId));
      await downVoteComment(threadId, commentId);
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

const asyncUnVoteComment = (userId, threadId, commentId) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(unVoteCommentActionCreator(userId, commentId));
      await unVoteComment(threadId, commentId);
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

const asyncaddComment = (threadId, content) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      const commentData = await addComment(threadId, content);
      dispatch(addCommentActionCreator(commentData));
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

export {
  receiveDetailThreadActionCreator,
  addCommentActionCreator,
  clearDetailThreadActionCreator,
  downVoteCommentActionCreator,
  downVoteDetailThreadActionCreator,
  unVoteCommentActionCreator,
  unVoteDetailThreadActionCreator,
  upVoteCommentActionCreator,
  upVoteDetailThreadActionCreator,
  asyncReceiveDetailThread,
  ActionType,
  asyncUpVoteDetailThread,
  asyncDownVoteDetailThread,
  asyncUnVoteDetailThread,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncUnVoteComment,
  asyncaddComment,
};
