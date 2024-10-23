import { Item } from '../types/Item';

const API_URL = '/api/items';

// Get all items
export const getItems = async (): Promise<Item[]> => {
  const response = await fetch(API_URL);
  
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }

  return response.json();
};

// Add a new item
export const addItem = async (item: Omit<Item, 'id'>): Promise<Item> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error('Failed to add item');
  }

  return response.json();
};

// Delete an item
export const deleteItem = async (itemId: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${itemId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete item');
  }
};
