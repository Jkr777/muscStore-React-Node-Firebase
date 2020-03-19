import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/selectors';
import CollectionItem from '../../components/Collection-Item';

const CollectionPage = ({ collection }) => (
  <div className="collection-items">
    <h2 className="collection-items__title">{collection.title}</h2>
    <div className="items">
      {
        collection.items.map(i => <CollectionItem key={i.id} {...i}/>)
      }
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  collection: selectCollection(props.match.params.id)(state)
});


export default connect(mapStateToProps)(CollectionPage);