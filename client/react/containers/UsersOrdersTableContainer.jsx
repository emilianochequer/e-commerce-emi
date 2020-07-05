import React from 'react';
import UsersOrdersTable from '../components/UsersOrdersTable';
import { connect } from 'react-redux';

class UsersOrdersTableContainer extends React.Component {
  render() {
    return <UsersOrdersTable />;
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     onDelete: userOrder => {
//       dispatch(findUserOrder(userOrder)); OJO NO ESTA CREADA ESTA FUNCION findUserOrder()
//     },
//   };
// };

const mapStateToProps = (state, Props) => ({
  orders: state.orders,
});
// pasar  mapDispatchToProps en el connect
export default connect(mapStateToProps)(UsersOrdersTable);
