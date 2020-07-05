import React from 'react';
import './Cart.css';

export default ({
  cart,
  changeAmount,
  amount,
  user,
  changeStatus,
  history,
}) => {
  if (cart.products.length) {
    return (
      <div className="container">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Product</th>
              <th style={{ width: '10%' }}>Price</th>
              <th style={{ width: '8%' }}>Quantity</th>
              <th style={{ width: '22%' }} className="text-center">
                Subtotal
              </th>
              <th style={{ width: '10%' }} />
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product, index) => (
              <tr key={product.id}>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-sm-2 hidden-xs">
                      <img
                        src={product.image}
                        alt="..."
                        className="img-responsive"
                        style={{ width: '100px' }}
                      />
                    </div>
                    <div className="col-sm-10">
                      <h4 className="nomargin">{product.name}</h4>
                    </div>
                  </div>
                </td>
                <td data-th="Price">
                  {product.orderDetail.price
                    ? product.orderDetail.price
                    : product.price}
                </td>
                <td data-th="Quantity">
                  <input
                    type="number"
                    className="form-control text-center"
                    value={
                      product.orderDetail.amount
                        ? product.orderDetail.amount
                        : product.amount
                    }
                    onChange={e =>
                      changeAmount(
                        Number(e.target.value),
                        index,
                        cart.id,
                        user.id,
                        product,
                      )
                    }
                    id="amount"
                  />
                </td>
                <td data-th="Subtotal" className="text-center">
                  {product.orderDetail.price
                    ? product.orderDetail.price * product.orderDetail.amount
                    : product.price * product.amount}
                </td>
                <td className="actions" data-th="">
                  <button className="btn btn-info btn-sm">
                    <i className="fa fa-refresh" />
                  </button>
                  <button className="btn btn-danger btn-sm">
                    <i className="fa fa-trash-o" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <a href="#" className="btn btn-warning">
                  <i className="fa fa-angle-left" /> Continue Shopping
                </a>
              </td>
              <td colSpan="2" className="hidden-xs" />
              <td className="hidden-xs text-center">
                <strong>Total: 19</strong>
              </td>
              <td>
                <button
                  onClick={() => changeStatus(cart.id, 'Created')}
                  className="btn btn-success btn-block"
                >
                  Checkout <i className="fa fa-angle-right" />
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};
