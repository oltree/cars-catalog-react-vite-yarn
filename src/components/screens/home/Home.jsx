import { useEffect, useState } from 'react';

import CarForm from './car-form/CarForm';
import Car from './car/Car';

import { CarService } from '../../../services/CarService';

import styles from './Home.module.scss';

const Home = () => {
  const [cars, setCars] = useState([]);
  console.log(cars);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAllCars();
      setCars(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Cars catalog</h1>
      <CarForm setCars={setCars} />
      <div className={styles.cars}>
        {cars.length ? (
          cars.map((car) => (
            <Car
              key={car.id}
              car={car}
            />
          ))
        ) : (
          <p>There are not cars.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
