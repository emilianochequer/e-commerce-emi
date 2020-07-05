import React from 'react';
import './Cart.css';

export default ({ orders, changeState, history, states }) => {
  if (orders.length) {
    return (
      <div className="container">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: '50%' }}>User</th>
              <th style={{ width: '10%' }}>Fecha</th>
              <th style={{ width: '8%' }}>Estado</th>
              <th style={{ width: '10%' }} />
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td data-th="User">
                  {order.user.firstName + ' ' + order.user.lastName}
                </td>
                <td data-th="Fecha">{order.date}</td>
                <td data-th="Quantity">
                  <select
                    className="form-control"
                    id="quantity"
                    value={order.status}
                    onChange={e => changeState(order.id, e.target.value, index)}
                  >
                    {states.map(value => <option>{value}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};
