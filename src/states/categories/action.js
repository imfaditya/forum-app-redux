const ActionType = {
  RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
  CLEAR_CATEGORIES: 'CLEAR_CATEGORIES',
  SET_CATEGORY: 'SET_CATEGORY',
  UNSET_CATEGORY: 'UNSET_CATEGORY',
};

const receiveCategoriesActionCreator = (listCategories) => ({
  type: ActionType.RECEIVE_CATEGORIES,
  payload: {
    listCategories,
  },
});

const clearCategoriesActionCreator = () => ({
  type: ActionType.CLEAR_CATEGORIES,
});

const setCategoryActionCreator = (selectedCategory) => ({
  type: ActionType.SET_CATEGORY,
  payload: {
    selectedCategory,
  },
});

const unsetCategoryActionCreator = () => ({
  type: ActionType.UNSET_CATEGORY,
});

export {
  ActionType,
  receiveCategoriesActionCreator,
  clearCategoriesActionCreator,
  setCategoryActionCreator,
  unsetCategoryActionCreator,
};
