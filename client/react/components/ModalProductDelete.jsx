import React from 'react';

export default ({ product, onDelete }) => (
  <div
    className="modal fade"
    id={`modalDelete${product.id}`}
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Delete {product.name}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          Product <strong>{product.name}</strong> will be deleted. Are you sure?
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={e => onDelete(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);
