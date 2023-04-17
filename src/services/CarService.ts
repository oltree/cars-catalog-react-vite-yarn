import axios from 'axios';

import { ICar, ICarData } from '../types/car.interface';

const baseURL = 'http://localhost:3000/cars';

export const CarService = {
  async getAllCars() {
    try {
      const { data } = await axios.get<ICar[]>(baseURL);
      return data;
    } catch (e) {
      console.error(e);
    }
  },

  async getCarById(id: string) {
    try {
      const { data } = await axios.get<ICar>(`${baseURL}/${id}`);
      return data;
    } catch (e) {
      console.error(e);
    }
  },

  async addCar(car: ICarData) {
    try {
      const { data } = await axios.post(baseURL, car);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
