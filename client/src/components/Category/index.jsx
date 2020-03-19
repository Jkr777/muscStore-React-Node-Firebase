import React from 'react';
import { withRouter } from 'react-router-dom';

const Category = ({title, imageUrl, size, link, history}) => (
  <div onClick={() => history.push(`${link}`)} className={`${size} category`}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}>
    <div className="content">
      <h1 className="content__title">{title}</h1>
      <span className="content__subtitle">See more</span>
    </div>
    </div>
  </div>
);

export default withRouter(Category);