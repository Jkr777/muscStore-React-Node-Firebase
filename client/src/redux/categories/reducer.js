const initialState = {
  list: [{
    title: 'Controllers',
    imageUrl: 'https://images.unsplash.com/photo-1547210841-2ceb0c5f0679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    id: 1,
    link: '/shop/controllers'
  },
  {
    title: 'Keyboards',
    imageUrl: 'https://images.unsplash.com/photo-1561084762-539a830b098f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
    id: 2,
    link: '/shop/keyboards'
  },
  {
    title: 'Headphones',
    imageUrl: 'https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    id: 3,
    link: '/shop/headphones'
  },
  {
    title: 'Studio Monitors',
    imageUrl: 'https://images.unsplash.com/photo-1563330232-57114bb0823c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    id: 4,
    link: '/shop/studio-monitors'
  },
  {
    title: 'Audio Interface',
    imageUrl: 'https://images.unsplash.com/photo-1486837007094-f97925b97013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    size: 'large',
    id: 5,
    link: '/shop/audio-interface'
  }]
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;