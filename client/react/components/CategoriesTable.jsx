import React from 'react';
import './ProductsTable.css';
import { Link } from 'react-router-dom';
import NotAuthorized from './NotAuthorized';
import ModalCategoryDelete from './ModalCategoryDelete';
import ModalCategoryEdit from './ModalCategoryEdit';
import ModalCategoryAdd from './ModalCategoryAdd';

export default ({
  categories,
  user,
  removeCategory,
  editCategory,
  addCategory,
  name,
  handleChange,
  updateState,
  submitCategory,
}) => (
  <div>
    {user.rol !== 'admin' ? (
      <NotAuthorized />
    ) : (
      <div className="container my-3">
        <h2>
          Categories{' '}
          <button
            type="button"
            className="btn btn-secondary btn-sm mr-2"
            data-toggle="modal"
            data-target={`#modalAddCategory`}
          >
            Add
          </button>
        </h2>

        <ModalCategoryAdd
          submitCategory={submitCategory}
          handleChange={handleChange}
          name={name}
        />

        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  {/* <Link to={`/admin/categories/edit/${category.id}`}>
                    <button className="btn btn-secondary btn-sm mr-2">
                      Edit
                    </button>
                  </Link> */}
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm mr-2"
                    data-toggle="modal"
                    data-target={`#modalEditCategory${category.id}`}
                    onClick={() => updateState({ name: category.name })}
                  >
                    Edit
                  </button>
                  <ModalCategoryEdit
                    category={category}
                    onEdit={editCategory}
                    name={name}
                    handleChange={handleChange}
                  />
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    data-toggle="modal"
                    data-target={`#modalDeleteCategory${category.id}`}
                  >
                    Delete
                  </button>
                  <ModalCategoryDelete
                    category={category}
                    onDelete={removeCategory}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);
