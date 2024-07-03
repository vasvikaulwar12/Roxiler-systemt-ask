import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemList.css';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3000/items');
        console.log(result.data);

        setItems(result.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="item-list">
      {items.map(item => (
        <li key={item._id} className="item">
          <div className="item-content">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item._id}</p>
            
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
