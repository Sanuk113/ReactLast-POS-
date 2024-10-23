import { LoginCredentials, AuthResponse } from '../types/User';

const API_URL = '/api';  // Base URL for your backend API

// Login function
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Failed to login');
  }

  return response.json();
};

// Logout function (if needed for token invalidation or session handling)
export const logout = (): void => {
  localStorage.removeItem('token');
};
