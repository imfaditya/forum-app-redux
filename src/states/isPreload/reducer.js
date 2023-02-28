import { ActionType } from './action';

const isPreloadReducer = (isPreload = true, action = {}) => {
  switch (action.type) {
    case ActionType.SET_PRELOAD:
      return action.type.isPreload;
    default:
      return isPreload;
  }
};

export default isPreloadReducer;
