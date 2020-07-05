import React from 'react';

export default ({ category, onDelete }) => (
  <div
    className="modal fade"
    id={`modalDeleteCategory${category.id}`}
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Delete {category.name}
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
          <strong>{category.name}</strong> will be deleted. Are you sure?
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancels
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={e => onDelete(category.id, e)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);
