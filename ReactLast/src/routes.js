import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import ItemList from './components/Items/ItemList'; 
import AddEditItem from './components/Items/AddEditItem'; 
import PosInterface from './components/POS/PosInterface'; 
import StockManagement from './pages/StockManagement'; 
import Dashboard from './pages/Dashboard'; 

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/items" element={<ItemList />} />
      <Route path="/items/add" element={<AddEditItem />} />
      <Route path="/items/edit/:id" element={<AddEditItem />} /> 
      <Route path="/pos" element={<PosInterface />} />
      <Route path="/stock" element={<StockManagement />} />
    </Routes>
  );
};

export default AppRoutes;
