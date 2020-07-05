import React from 'react';
import NotAuthorized from './NotAuthorized';
import UsersRow from './UsersRow';

export default ({ users, user, onDelete, onMakeAdmin }) => (
  <div>
    {user.rol !== 'admin' ? (
      <NotAuthorized />
    ) : (
      <div>
        <h2>Usuarios</h2>
        {users.length ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Admin</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <UsersRow
                  user={user}
                  key={user.id}
                  onDelete={onDelete}
                  onMakeAdmin={onMakeAdmin}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-danger">No hay usuario en la base de datos</p>
        )}
      </div>
    )}
  </div>
);
