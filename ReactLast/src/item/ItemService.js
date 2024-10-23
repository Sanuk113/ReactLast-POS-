import axios from 'axios';

const API_URL = '/api/items'; 

const ItemService = {
  getItems: () => {
    return axios.get(API_URL);
  },

  getItemById: (id) => {
    return axios.get(`${API_URL}/${id}`);
  },

  addItem: (item) => {
    return axios.post(API_URL, item);
  },

  updateItem: (id, item) => {
    return axios.put(`${API_URL}/${id}`, item);
  },

  deleteItem: (id) => {
    return axios.delete(`${API_URL}/${id}`);
  }
};

export default ItemService;
