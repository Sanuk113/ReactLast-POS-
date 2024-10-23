import { useState, useEffect } from 'react';
import { User, LoginCredentials } from '../types/User';

interface UseAuthReturn {
  user: User | null;
  token: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  useEffect(() => {
    
    if (token) {
      
      const fetchUserData = async () => {
        const response = await fetch('/api/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData: User = await response.json();
        setUser(userData);
      };
      fetchUserData();
    }
  }, [token]);

  const login = async (credentials: LoginCredentials) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    if (data.token) {
      setToken(data.token);
      localStorage.setItem('token', data.token);
      setUser(data.user);  
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  const isAuthenticated = !!token;

  return {
    user,
    token,
    login,
    logout,
    isAuthenticated,
  };
};
