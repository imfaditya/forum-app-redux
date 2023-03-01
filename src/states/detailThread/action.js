const ActionType = {
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
  CLEAR_DETAIL_THREAD: 'CLEAR_DETAIL_THREAD',
  ADD_COMMENT: 'ADD_COMMENT',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  UNVOTE_COMMENT: 'UNVOTE_COMMENT',
  UP_VOTE_THREAD: 'UP_VOTE_COMMENT',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_COMMENT',
  UNVOTE_THREAD: 'UNVOTE_COMMENT',
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

const upVoteCommentActionCreator = (userId) => ({
  type: ActionType.UP_VOTE_COMMENT,
  payload: {
    userId,
  },
});

const downVoteCommentActionCreator = (userId) => ({
  type: ActionType.DOWN_VOTE_COMMENT,
  payload: {
    userId,
  },
});

const unVoteCommentActionCreator = (userId) => ({
  type: ActionType.UNVOTE_COMMENT,
  payload: {
    userId,
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

export {
  receiveDetailThreadActionCreator,
  addCommentActionCreator,
  clearDetailThreadActionCreator,
  downVoteCommentActionCreator,
  downVoteThreadActionCreator,
  unVoteCommentActionCreator,
  unVoteThreadActionCreator,
  upVoteCommentActionCreator,
  upVoteThreadActionCreator,
  ActionType,
};
