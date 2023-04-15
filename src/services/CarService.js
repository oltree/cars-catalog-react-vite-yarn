import axios from 'axios';

const baseURL = 'http://localhost:3000/cars';

export const CarService = {
  async getAllCars() {
    try {
      const { data } = await axios.get(baseURL);
      return data;
    } catch (e) {
      console.error(e);
    }
  },

  async getCarById(id) {
    try {
      const { data } = await axios.get(`${baseURL}/${id}`);
      return data;
    } catch (e) {
      console.error(e);
    }
  },

  async addCar(car) {
    try {
      const { data } = await axios.post(baseURL, car);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
