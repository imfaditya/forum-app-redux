const ActionType = {
  SET_PRELOAD: 'SET_PRELOAD',
};

const setPreloadActionCreator = (isPreload) => ({
  type: ActionType.SET_PRELOAD,
  payload: {
    isPreload,
  },
});

export {
  ActionType,
  setPreloadActionCreator,
};
