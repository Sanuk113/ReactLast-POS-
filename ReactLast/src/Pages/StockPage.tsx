import React, { useState, useEffect } from 'react';

const StockPage: React.FC = () => {
  const [stockItems, setStockItems] = useState([]);

  useEffect(() => {
    
    const fetchStock = async () => {
      const response = await fetch('/api/stock');
      const data = await response.json();
      setStockItems(data);
    };
    fetchStock();
  }, []);

  return (
    <div className="stock-page">
      <h2>Stock Management</h2>
      <ul>
        {stockItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} in stock
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockPage;
