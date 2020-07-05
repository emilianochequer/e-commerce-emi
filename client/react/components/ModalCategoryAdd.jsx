import React from 'react';

export default ({ onAdd, handleChange, name, submitCategory }) => (
  <div
    className="modal fade"
    id="modalAddCategory"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add Category
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
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Category</label>
            <input
              name="name"
              value={name}
              type="text"
              onChange={handleChange}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Category Name"
            />
          </div>
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
            className="btn btn-primary"
            data-dismiss="modal"
            aria-label="Close"
            onClick={e => submitCategory(e)}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
);
