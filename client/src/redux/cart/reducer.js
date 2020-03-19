import { TOGGLE_CART, ADD_ITEM, REMOVE_ITEM, DECREMENT_ITEM, CLEAR_CART } from './action-types';
import { addCartItems, decrementCheckoutItem } from './utils';

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItems(state.cartItems, action.data)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(i => i.id !== action.id)
      };
    case DECREMENT_ITEM:
      return {
        ...state,
        cartItems: decrementCheckoutItem(state.cartItems, action.id)
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default cartReducer;