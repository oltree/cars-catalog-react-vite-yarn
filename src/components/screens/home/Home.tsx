import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';

import User from '../../ui/user/User';
import CarForm from '../../ui/car-form/CarForm';
import Catalog from '../../ui/catalog/Catalog';

import { CarService } from '../../../services/CarService';

import styles from './Home.module.scss';

const LOADING = 'Loading...';

const Home: FC = () => {
  const { data, isLoading } = useQuery(['cars'], () => CarService.getAllCars());

  if (isLoading) return <p>{LOADING}</p>;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Cars catalog</h1>
      <User />
      <CarForm />
      <Catalog cars={data} />
    </div>
  );
};

export default Home;
