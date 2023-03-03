import { ActionType } from './action';

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.UP_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return ({
            ...thread,
            upVotesBy: thread.upVotesBy.concat(action.payload.userId),
          });
        }

        return thread;
      });
    case ActionType.DOWN_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return ({
            ...thread,
            downVotesBy: thread.upVotesBy.concat(action.payload.userId),
          });
        }

        return thread;
      });
    case ActionType.UNVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return ({
            ...thread,
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
              : thread.downVotesBy,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy,
          });
        }

        return thread;
      });
    default:
      return threads;
  }
};

export default threadsReducer;
