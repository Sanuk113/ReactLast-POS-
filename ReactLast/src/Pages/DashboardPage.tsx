import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/items">Manage Items</Link></li>
          <li><Link to="/categories">Manage Categories</Link></li>
          <li><Link to="/stock">Stock Management</Link></li>
          <li><Link to="/pos">Point of Sale</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardPage;
