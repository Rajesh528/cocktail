// src/components/UserList.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { addUser, updateUser, deleteUser } from '../store/slices/userSlice';
import { User } from '../store/types';

const UserList: React.FC = () => {
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleAddUser = () => {
    const newUser: User = {
      id: users.length + 1,
      name,
      email,
    };
    dispatch(addUser(newUser));
    setName('');
    setEmail('');
  };

  const handleUpdateUser = (user: User) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
  };

  const handleSaveUpdate = () => {
    if (editingUser) {
      const updatedUser = { ...editingUser, name, email };
      dispatch(updateUser(updatedUser));
      setEditingUser(null);
      setName('');
      setEmail('');
    }
  };

  const handleDeleteUser = (userId: number) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleUpdateUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>{editingUser ? 'Update User' : 'Add User'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={editingUser ? handleSaveUpdate : handleAddUser}>
        {editingUser ? 'Save' : 'Add'}
      </button>
    </div>
  );
};

export default UserList;
