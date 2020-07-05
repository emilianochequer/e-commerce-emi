import React from 'react';

export default ({ user, onDelete }) => (
  <div
    className="modal fade"
    id={`modalDelete${user.id}`}
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Delete {user.firstName}
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
          <strong>
            {user.firstName} {user.lastName}
          </strong>{' '}
          will be deleted. Are you sure?
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
            onClick={e => onDelete(user.id, e)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);
