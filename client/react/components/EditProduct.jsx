import React from 'react';
import './AddProduct.css';
import NotAuthorized from './NotAuthorized';
import FileBase64 from 'react-filebase64';

export default ({
  user,
  name,
  description,
  stock,
  price,
  image,
  categories,
  submitForm,
  handleChange,
  getFile,
  categoriesList,
}) => (
  <div>
    {user.rol !== 'admin' ? (
      <NotAuthorized />
    ) : (
      <div className="container mt-3">
        <h1 className="my-3">Edit Product</h1>
        <form onSubmit={submitForm}>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Product Name</label>
                <input
                  name="name"
                  value={name}
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Product Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Description</label>
                <input
                  name="description"
                  value={description}
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="categories">Categories</label>
                <select
                  name="categories"
                  type="text"
                  onChange={handleChange}
                  multiple
                  className="form-control"
                  id="categories"
                  value={categories.map(cat => cat.id)}
                >
                  {categoriesList.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                    <input
                      name="stock"
                      value={stock}
                      type="number"
                      onChange={handleChange}
                      className="form-control"
                      id="stock"
                      placeholder="Stock"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input
                        name="price"
                        value={price}
                        type="number"
                        onChange={handleChange}
                        className="form-control"
                        id="price"
                        placeholder="Price"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="image-container border rounded">
                <img src={image} className="img-fluid" />
              </div>
              <FileBase64
                className="form-control"
                multiple={false}
                onDone={file => getFile(file.base64)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </form>
      </div>
    )}
  </div>
);
