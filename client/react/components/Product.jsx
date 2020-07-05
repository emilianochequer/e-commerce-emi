import React from 'react';
import ReactStars from 'react-stars';

import './Product.css';
import GetReviews from './GetReviews';

export default ({
  product,
  reviews,
  rating,
  history,
  user,
  addProductToCart,
}) => {
  if (product) {
    return (
      <div className="container product-container mt-3">
        <div className="row">
          <div className="col-sm-5">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-sm-7">
            <div className="row">
              <div className="col-sm-12">
                <h1>{product.name}</h1>
                <p className="categories-badge">
                  {product.categories &&
                    product.categories.map(category => (
                      <span key={category.id} className="badge badge-secondary">
                        {category.name}
                      </span>
                    ))}
                </p>
                <div className="rating-wrap align-middle">
                  <ReactStars count={5} value={rating} edit={false} size={20} />
                </div>{' '}
                <small>{reviews.length} reviews</small>
              </div>
            </div>
            <div className="row ">
              <div className="col-sm-12">
                <h2 className="price">$ {product.price}</h2>
                <p>
                  <small>
                    Hasta 6 x $ {(product.price / 6).toFixed(2)} cuotas sin
                    interés
                  </small>
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="col-sm-2">
                <form>
                  <div className="form-group">
                    <select className="form-control" id="quantity">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="col-sm-10">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => addProductToCart(product, user.id)}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <h2>Descripción</h2>
            <p>{product.description}</p>
          </div>
        </div>
        <hr />
        <div>
          <h2>
            Reviews
            <button
              type="button"
              className="btn btn-secondary btn-sm ml-2"
              onClick={() => history.push(`/products/${product.id}/addreview`)}
            >
              Add
            </button>
          </h2>
          <div className="card-deck">
            {reviews.map(review => (
              <GetReviews
                key={review.id}
                title={review.title}
                description={review.description}
                star={review.star}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};
