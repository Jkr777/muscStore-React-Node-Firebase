import React from 'react';

const FormButton = ({ children, googleActive, cartBtn, ...otherProps }) => (
  <button className={`${cartBtn ? "cart-btn" : ''} ${googleActive ? "google-bnt" : ''} form-button`} {...otherProps}>
    { children }
  </button>
);

export default FormButton;