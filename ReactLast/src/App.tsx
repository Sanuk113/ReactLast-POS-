import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './Components/Dashboard';
import ItemPage from './components/ItemPage';
import StockPage from './components/StockPage';
import POSPage from './components/POSPage';


const isAuthenticated = () => {
  return !!localStorage.getItem('token'); 
};


const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<LoginPage />} />

          
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/items" element={<ProtectedRoute><ItemPage /></ProtectedRoute>} />
          <Route path="/stock" element={<ProtectedRoute><StockPage /></ProtectedRoute>} />
          <Route path="/pos" element={<ProtectedRoute><POSPage /></ProtectedRoute>} />

         
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
