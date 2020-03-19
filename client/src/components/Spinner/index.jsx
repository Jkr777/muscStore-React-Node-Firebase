import React from 'react';
import Spinner from '../LazySpinner';

const WithSpinner = WrappedComp => ({loading, ...otherProps}) => {
  return loading ? <Spinner /> : <WrappedComp {...otherProps} />
};

export default WithSpinner;