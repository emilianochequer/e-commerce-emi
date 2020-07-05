import React from 'react';
import ProductsTable from '../components/ProductsTable';
import { connect } from 'react-redux';
import { deleteProduct } from '../action-creator/products';
import { hideModal } from '../utils';

class ProductsTableContainer extends React.Component {
  render() {
    return <ProductsTable />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: productId => {
      hideModal();
      dispatch(deleteProduct(productId));
    },
  };
};
const mapStateToProps = (state, Props) => ({
  products: state.products,
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTable);
