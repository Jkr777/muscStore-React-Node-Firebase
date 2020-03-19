import React from 'react';
import CollectionItem from '../Collection-Item';

const Collection = ({title, items}) => {
  return(
  <div className="collection">
    <h2 className="collection__title">{title}</h2>
    <div className="items-container">
      {
        items.filter((e, i) => i < 4).map(e => <CollectionItem key={e.id} {...e} />)
      }
    </div>
  </div>
)};

export default Collection;