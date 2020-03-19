import { createSelector } from 'reselect'; 

const selectCart = state => state.cart; 

export const selectCartItems = createSelector([selectCart], cart => {
  return cart.cartItems
});

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

export const selectItemsNumber = createSelector([selectCartItems], cartItems => cartItems.reduce((prevNum, item) => {
  return prevNum + item.quantity }, 0)
); 

export const selectItemsTotal = createSelector([selectCartItems], cartItems => cartItems.reduce((prevPrice, item) => { 
  return prevPrice + item.price * item.quantity} , 0)
);