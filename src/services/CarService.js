import axios from 'axios';

export const CarService = {
  async getAllCars() {
    const response = await axios.get('http://localhost:3000/cars');

    return response.data;
  },

  async getCarById(id) {
    const response = await axios.get(`http://localhost:3000/cars/${id}`);

    return response.data;
  },
};
