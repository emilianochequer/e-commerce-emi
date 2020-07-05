import React from 'react';

export default props => {
  console.log(props);
  if (props.order.products) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.order.products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.amount}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <div />;
  }
};
