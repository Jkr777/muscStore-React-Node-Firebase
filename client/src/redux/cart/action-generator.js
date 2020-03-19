import { TOGGLE_CART, ADD_ITEM, REMOVE_ITEM, DECREMENT_ITEM, CLEAR_CART } from './action-types';

export const toggleCart = () => ({
  type: TOGGLE_CART
});

export const addItem = data => ({
  type: ADD_ITEM,
  data
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id
});

export const decrementItem = id => ({
  type: DECREMENT_ITEM,
  id
});

export const clearCart = () => ({
  type: CLEAR_CART
});