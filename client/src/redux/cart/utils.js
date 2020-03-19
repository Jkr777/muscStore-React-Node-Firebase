export const addCartItems = (cartItems, newItem) => {
  const searchItem = cartItems.find(i => i.id === newItem.id);

  if(searchItem) {
    return cartItems.map(i => i.id === newItem.id ? {...newItem, quantity: i.quantity + 1 } : newItem);
  }

  return [...cartItems, {...newItem, quantity: 1}];
};

export const decrementCheckoutItem = (cartItems, item) => {
  const searchItem = cartItems.find(i => i.id === item.id);

  if(searchItem.quantity === 1) {
    return cartItems.filter(i => i.id !== item.id);
  }

  return cartItems.map(i => i.id === item.id ? {...i, quantity: i.quantity - 1} : i);
};