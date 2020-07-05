import React from 'react';
import './AddProduct.css';

export default props => {
  return (
    <div className="container mt-5">
      <form onSubmit={props.submitForm}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={props.title}
            type="text"
            onChange={props.handleChange}
            className="form-control"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            defaultValue={props.description}
            onChange={props.handleChange}
          />
        </div>
        <select
          className="form-control"
          value={props.star}
          onChange={props.handleChange}
          name="star"
        >
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>

        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={() => props.history.push(`/products`)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
