import { ActionType } from './action';

const categoriesReducer = (
  categories = { listCategories: [], selectedCategory: '' },
  action = {},
) => {
  switch (action.type) {
    case ActionType.RECEIVE_CATEGORIES:
      return {
        listCategories: action.payload.listCategories,
        selectedCategory: categories.selectedCategory,
      };
    case ActionType.CLEAR_CATEGORIES:
      return {
        listCategories: [],
        selectedCategory: '',
      };
    case ActionType.SET_CATEGORY:
      return {
        listCategories: categories.listCategories,
        selectedCategory: action.payload.selectedCategory,
      };
    case ActionType.UNSET_CATEGORY:
      return {
        listCategories: categories.listCategories,
        selectedCategory: '',
      };
    default:
      return categories;
  }
};

export default categoriesReducer;
