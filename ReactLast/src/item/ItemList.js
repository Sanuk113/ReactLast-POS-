import React, { useState, useEffect } from 'react';
import ItemService from '../../services/ItemService';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await ItemService.getItems();
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await ItemService.deleteItem(itemId);
      fetchItems(); 
    } catch (error) {
      console.error('Error deleting item', error);
    }
  };

  return (
    <div>
      <h2>Item List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.category}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => window.location.href = `/items/edit/${item.id}`}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
