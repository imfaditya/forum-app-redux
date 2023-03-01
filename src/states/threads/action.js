const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
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

export {
  receiveThreadsActionCreator,
  addThreadActionCreator,
  ActionType,
};
