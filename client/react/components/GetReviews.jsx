import React from 'react';
import './ProductsTable.css';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

export default props => {
  return (
    <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
      <div className="card-header">
        <strong>{props.title}</strong>

        <ReactStars count={5} value={props.star} edit={false} size={15} />
      </div>
      <div className="card-body text-dark">
        {/* <h5 className="card-title">Dark card title</h5> */}
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};
