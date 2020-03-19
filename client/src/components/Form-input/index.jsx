import React from 'react';

const Input = ({ handleChange, label, ...otherProps }) => (
  <div className="input-container">
    <input 
      className="input"
      onChange={handleChange}
      {...otherProps}
    />
    {
      label ? 
        (
          <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
          </label>
        ) 
      : null
    }
  </div>
);

export default Input;