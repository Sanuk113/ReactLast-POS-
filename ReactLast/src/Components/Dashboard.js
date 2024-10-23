import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/items">Items</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/stock">Stock Management</Link></li>
          <li><Link to="/pos">Point of Sale</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
