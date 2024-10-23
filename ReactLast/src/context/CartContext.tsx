import React, { createContext, useState, useContext, ReactNode } from 'react';
import { CartItem } from '../types/CartItem';


interface CartContextType {
  cart: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (itemId: number) => void;
  clearCart: () => void;
  totalAmount: () => number;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItemToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalAmount = () => {
    return cart.reduce((total, cartItem) => total + cartItem.item.price * cartItem.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, removeItemFromCart, clearCart, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
