import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemService from '../../services/ItemService';

const AddEditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({ name: '', price: '', category: '' });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (id) {
      fetchItem(id);
      setIsEditMode(true);
    }
  }, [id]);

  const fetchItem = async (itemId) => {
    try {
      const response = await ItemService.getItemById(itemId);
      setItem(response.data);
    } catch (error) {
      console.error('Error fetching item details', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await ItemService.updateItem(id, item);
      } else {
        await ItemService.addItem(item);
      }
      navigate('/items'); // Redirect to item list after saving
    } catch (error) {
      console.error('Error saving item', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>{isEditMode ? 'Edit Item' : 'Add New Item'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={item.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={item.category}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{isEditMode ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default AddEditItem;
