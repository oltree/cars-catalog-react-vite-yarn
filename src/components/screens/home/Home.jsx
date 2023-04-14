import { useEffect, useState } from 'react';

import CarForm from './car-form/CarForm';
import Car from './car/Car';

import styles from './Home.module.scss';

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/cars');
      const data = await response.json();
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
