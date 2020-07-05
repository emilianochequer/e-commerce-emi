import React from 'react';
import { Link } from 'react-router-dom';

export default ({ categories, selectedCategory, history }) => (
  <nav className="col-md-2 d-none d-md-block sidebar pr-0 mt-3">
    <div className="sidebar-sticky text-left">
      {/* <h5>Categorias</h5> */}
      <div className="list-group">
        {categories.map(category => (
          <button
            key={category.id}
            type="button"
            onClick={e => {
              history.push(`/products?category=${category.id}`);
            }}
            className={`list-group-item list-group-item-action list-group-item-secondary ${
              selectedCategory == category.id ? 'active' : ''
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  </nav>
);
