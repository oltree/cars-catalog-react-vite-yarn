import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import CarForm from './car-form/CarForm';
import Car from './car/Car';
import User from './user/User';

import { CarService } from '../../../services/CarService';

import styles from './Home.module.scss';

const Home = () => {
  const { data, isLoading } = useQuery(['cars'], () => CarService.getAllCars());

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Cars catalog</h1>
      <User />
      <CarForm />
      <div className={styles.cars}>
        {data.length ? (
          data.map((car) => (
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
