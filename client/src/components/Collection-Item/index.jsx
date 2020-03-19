import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/action-generator';
import FormButton from '../Form-button';

const CollectionItem = ({ id, name, price, imageUrl, addItem }) => (
  <div className="collection-item">
    <div className="collection-item-info">
      <p className="name">{name}</p>
      <p className="price">$ {price}</p>
    </div>
    <div className="collection-item__image" style={{ backgroundImage: `url(${imageUrl})` }}>
      <FormButton onClick={() => addItem({id, name, price, imageUrl})} cartBtn>Add to cart</FormButton>
    </div>
    <div className="collection-item__description">
      <p>description</p>
      <p>description</p>
      <p>description</p>
    </div>
  </div>
);

export default connect(null, { addItem })(CollectionItem);