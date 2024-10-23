import { StockItem } from '../types/Stock';

const API_URL = '/api/stock';

// Fetch all stock items
export const getStock = async (): Promise<StockItem[]> => {
  const response = await fetch(API_URL);
  
  if (!response.ok) {
    throw new Error('Failed to fetch stock data');
  }

  return response.json();
};

// Update stock for a specific item
export const updateStock = async (itemId: number, quantity: number): Promise<StockItem> => {
  const response = await fetch(`${API_URL}/${itemId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ quantity }),
  });

  if (!response.ok) {
    throw new Error('Failed to update stock');
  }

  return response.json();
};
