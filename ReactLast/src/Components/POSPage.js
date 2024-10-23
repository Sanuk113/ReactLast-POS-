import React, { useState } from 'react';

const POSPage = () => {
  const [cart, setCart] = useState([]);
  const [currentItem, setCurrentItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setCart([...cart, { item: currentItem, quantity }]);
    setCurrentItem('');
    setQuantity(1);
  };

  const handleCheckout = async () => {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart),
    });
    const result = await response.json();
    if (result.success) {
      alert('Checkout successful!');
      setCart([]);
    } else {
      alert('Checkout failed.');
    }
  };

  return (
    <div>
      <h2>Point of Sale</h2>
      <input
        type="text"
        placeholder="Item"
        value={currentItem}
        onChange={(e) => setCurrentItem(e.target.value)}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
      <ul>
        {cart.map((cartItem, index) => (
          <li key={index}>
            {cartItem.item} - {cartItem.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default POSPage;
