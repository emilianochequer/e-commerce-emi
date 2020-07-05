import React from 'react';

export default ({ user, onMakeAdmin }) => (
  <div
    className="modal fade"
    id={`modalMakeAdmin${user.id}`}
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Give {user.firstName} admin rights
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
          will be an administrator. Are you sure?
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={e => onMakeAdmin(user.id)}
          >
            Give admin rights
          </button>
        </div>
      </div>
    </div>
  </div>
);
