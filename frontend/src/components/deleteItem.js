import React, { useState } from 'react';
import axios from 'axios';
import './DeleteItem.css';

const DeleteItem = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.delete(`http://localhost:3000/items/${id}`);
    setId('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID"
      />
      <button type="submit">Delete</button>
    </form>
  );
};

export default DeleteItem;
