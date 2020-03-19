import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategoriesList } from '../../redux/categories/selectors';
import Category from '../Category';

const Categories = ({ list }) => (
  <div className="categories">
    {list.map(e => <Category key={e.id} {...e}/>)}
  </div>
);

const mapStateToProps = createStructuredSelector({
  list: selectCategoriesList
});

export default connect(mapStateToProps)(Categories);