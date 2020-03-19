import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsArray } from '../../redux/shop/selectors';
import Collection from '../Collection';

const Collections = ({ collections }) => (
  <div className="collections">
    {
      collections.map(e => <Collection key={e.id} {...e} />)
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsArray
})

export default connect(mapStateToProps)(Collections);