import React from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux';
import { addProductToCart } from '../action-creator/cart';

class ProductContainers extends React.Component {
  render() {
    return <Product />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: state.product,
  reviews: state.reviews,
  rating: state.rating,
  history: ownProps.history,
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return {
    addProductToCart: (productId, userId) =>
      dispatch(addProductToCart(productId, userId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
