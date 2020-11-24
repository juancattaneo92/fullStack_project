import * as CategoriesApiUtil from "../util/categories_api_util";
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';


export const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
});

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategory = (categoryId) => dispatch => {
  return CategoriesApiUtil.fetchCategory(categoryId).then(
    response => dispatch(receiveCategory(response)))
  };

export const fetchCategories = () => dispatch => {
  return CategoriesApiUtil.fetchCategories().then(
    response => dispatch(receiveCategories(response)))
  };

