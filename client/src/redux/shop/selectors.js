import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollectionsArray = createSelector([selectShopCollections], collections => collections ? Object.values(collections) : []);

export const selectCollection = urlParam => createSelector([selectShopCollections], collections => collections ? collections[urlParam] : null);

export const selectCollectionFetching = createSelector([selectShop], shop => shop.fetching);

export const selectCollectionLoaded = createSelector([selectShop], shop => !!shop.collections)