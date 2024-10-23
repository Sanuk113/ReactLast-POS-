import React, { useState, useEffect } from 'react';

const ItemPage: React.FC = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    // Fetch items from API
    const fetchItems = async () => {
      const response = await fetch('/api/items');
      const data = await response.json();
      setItems(data);
    };
    fetchItems();
  }, []);

  const handleAddItem = async () => {
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newItem }),
    });
    const data = await response.json();
    setItems([...items, data]);
    setNewItem('');
  };

  return (
    <div className="item-page">
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New Item"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ItemPage;
