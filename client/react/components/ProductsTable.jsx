import React from 'react';
import './ProductsTable.css';
import { Link } from 'react-router-dom';
import ModalProductDelete from './ModalProductDelete';
import NotAuthorized from './NotAuthorized';

export default ({ user, products, onDelete }) => (
  <div>
    {user.rol !== 'admin' ? (
      <NotAuthorized />
    ) : (
      <div className="container mt-3">
        <h1 className="mb-3">
          Products{' '}
          <Link to={`/admin/products/add`}>
            <button className="btn btn-secondary btn-sm">Add Product</button>
          </Link>
        </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th />
              <th>Product Name</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img src={product.image} className="" height="35" />
                </td>
                <td>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </td>
                <td>{`${product.description.slice(0, 25)}...`}</td>
                <td>{product.stock}</td>
                <td>{`$ ${product.price}`}</td>
                <td>
                  <Link to={`/admin/products/edit/${product.id}`}>
                    <button className="btn btn-secondary btn-sm">Edit</button>
                  </Link>{' '}
                  <button
                    data-toggle="modal"
                    data-target={`#modalDelete${product.id}`}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                  <ModalProductDelete onDelete={onDelete} product={product} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);
