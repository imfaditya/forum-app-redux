import { ActionType } from './action';

const detailThreadReducer = (detailThread = null, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_THREAD:
      return action.payload.detailThread;
    case ActionType.CLEAR_DETAIL_THREAD:
      return null;
    case ActionType.UP_VOTE_DETAIL_THREAD:
      return {
        ...detailThread,
        upVotesBy: [...detailThread.upVotesBy, action.payload.userId],
      };
    case ActionType.DOWN_VOTE_DETAIL_THREAD:
      return {
        ...detailThread,
        downVotesBy: [...detailThread.downVotesBy, action.payload.userId],
      };
    case ActionType.UNVOTE_DETAIL_THREAD:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.upVotesBy,
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.downVotesBy,
      };
    case ActionType.UP_VOTE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map(
          (comment) => ({
            ...comment,
            upVotesBy: comment.upVotesBy.concat(action.payload.userId),
          }),
        ),
      };
    case ActionType.DOWN_VOTE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map(
          (comment) => ({
            ...comment,
            downVotesBy: comment.downVotesBy.concat(action.payload.userId),
          }),
        ),
      };
    case ActionType.UNVOTE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map(
          (comment) => ({
            ...comment,
            upVotesBy: comment.upVotesBy.includes(action.payload.userId)
              ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
              : comment.upVotesBy,
            downVotesBy: comment.downVotesBy.includes(action.payload.userId)
              ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
              : comment.downVotesBy,
          }),
        ),
      };
    case ActionType.ADD_COMMENT:
      return {
        ...detailThread,
        comments: [...detailThread.comments, action.payload.comment],
      };
    default:
      return detailThread;
  }
};

export default detailThreadReducer;
