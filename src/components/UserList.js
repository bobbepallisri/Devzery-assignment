import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-1">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
