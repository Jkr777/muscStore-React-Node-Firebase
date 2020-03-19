import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/action-generator';
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetching, selectCollectionLoaded } from '../../redux/shop/selectors';
import { Route } from 'react-router-dom';
import WithSpinner from '../../components/Spinner';
import Collections from '../../components/Collections';
import CollectionPage from '../Collection-Page';

const CollectionsWithSpinner = WithSpinner(Collections);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({ match, loading, collectionLoaded, fetchCollectionsStart }) => { 
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop">
      <Route exact path={`${match.path}`} render={props => <CollectionsWithSpinner loading={loading} {...props} />} />
      <Route path={`${match.path}/:id`} render={props => <CollectionPageWithSpinner loading={!collectionLoaded} {...props} />} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: selectCollectionFetching,
  collectionLoaded: selectCollectionLoaded
});

export default connect(mapStateToProps, { fetchCollectionsStart })(Shop);