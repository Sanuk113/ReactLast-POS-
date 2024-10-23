import { CartItem } from '../types/CartItem';

const API_URL = '/api/cart';

// Submit a checkout request
export const checkout = async (cart: CartItem[]): Promise<void> => {
  const response = await fetch(`${API_URL}/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cart }),
  });

  if (!response.ok) {
    throw new Error('Checkout failed');
  }

  return response.json();
};
