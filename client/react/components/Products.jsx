import React from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import SidebarCategories from './SidebarCategories';

export default ({
  products,
  categories,
  addProductToCart,
  user,
  history,
  selectedCategory,
}) => (
  <div className="row">
    <SidebarCategories
      categories={categories}
      history={history}
      selectedCategory={selectedCategory}
    />
    <main className="col-md-9 col-lg-10 pt-3 px-4 mx-auto justify-content-center">
      {!products.length ? (
        <div className="text-center mt-5">
          <h2 className="text-center">No products to show for this category</h2>
          <p className="huge-icon">😢</p>
        </div>
      ) : (
        <div className="card-group align-self-center">
          {products.map(product => (
            <SingleProduct
              key={product.id}
              product={product}
              addProductToCart={addProductToCart}
              user={user}
            />
          ))}
        </div>
      )}
    </main>
  </div>
);
