import axios from 'axios';

const API_URL = '/api/sales'; 

const PosService = {
  processSale: (cart) => {
    return axios.post(API_URL, { cart });
  },
};

export default PosService;
