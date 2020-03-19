import { createSelector } from 'reselect';

const selectCategories = state => state.categories;

export const selectCategoriesList = createSelector([selectCategories], categories => categories.list);