import React, { Component } from 'react';
import store from '../store';
import Products from '../components/Products';
import { connect } from 'react-redux';
import { addProductToCart } from '../action-creator/cart';
import { withRouter } from 'react-router';
import { fetchProducts } from '../action-creator/products';

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    const search = nextProps.location.search;
    const queryParams = new URLSearchParams(search);
    const selectedCategory = queryParams.get('category');
    const oldSearch = this.props.location.search;
    const oldQueryParams = new URLSearchParams(oldSearch);
    const oldCategory = oldQueryParams.get('category');

    if (oldCategory !== selectedCategory) {
      store.dispatch(fetchProducts(selectedCategory));
    }
  }

  render() {
    return (
      <Products
        products={this.props.products}
        categories={this.props.categories}
        user={this.props.user}
        selectedCategory={this.props.selectedCategory}
        addProductToCart={this.props.addProductToCart}
        history={this.props.history}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const search = ownProps.location.search;
  const queryParams = new URLSearchParams(search);
  const selectedCategory = queryParams.get('category');
  const productosConRating = state.products.slice();
  productosConRating.forEach((prod, i) => {
    let reviewsCount = prod.reviews.length;
    if (!reviewsCount) {
      productosConRating[i].rating = 0;
    } else {
      let sum = 0;
      prod.reviews.forEach(reviews => {
        sum += reviews.star;
      });
      productosConRating[i].rating = sum / reviewsCount;
    }
  });
  return {
    products: productosConRating,
    categories: state.categories,
    user: state.user,
    selectedCategory,
    history: ownProps.history,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addProductToCart: (productId, userId) =>
      dispatch(addProductToCart(productId, userId)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductsContainer),
);
