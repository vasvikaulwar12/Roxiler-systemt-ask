import React, { useState } from 'react';
import axios from 'axios';
import './CreateItem.css';

const CreateItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3000/items', { name, description });
    setName('');
    setDescription('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateItem;
