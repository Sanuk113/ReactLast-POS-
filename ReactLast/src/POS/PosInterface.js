import React, { useState } from 'react';
import Cart from './Cart';
import ItemService from '../../services/ItemService'; // Service for fetching items
import PosService from '../../services/PosService'; // Service for handling POS transactions

const PosInterface = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch items when the component mounts
  React.useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await ItemService.getItems();
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleCheckout = async () => {
    try {
      await PosService.processSale(cart);
      alert('Sale processed successfully!');
      setCart([]); 
    } catch (error) {
      console.error('Error processing sale:', error);
    }
  };

  return (
    <div>
      <h2>Point of Sale</h2>
      <div>
        <h3>Available Items</h3>
        <div className="item-list">
          {items.map((item) => (
            <div key={item.id}>
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <Cart cart={cart} setCart={setCart} />

      <button onClick={handleCheckout} disabled={cart.length === 0}>
        Checkout
      </button>
    </div>
  );
};

export default PosInterface;
