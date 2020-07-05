import React from 'react';
import OrderDetails from '../components/OrderDetails';
import { connect } from 'react-redux';

class ProductContainers extends React.Component {
  render() {
    return <OrderDetails />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  order: state.order,
});

export default connect(mapStateToProps)(OrderDetails);
