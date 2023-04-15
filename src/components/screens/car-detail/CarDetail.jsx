import { useState, useEffect, memo } from 'react';
import { Link, useParams } from 'react-router-dom';

import Car from '../home/car/Car';

import { CarService } from '../../../services/CarService';
import { withAuth } from '../../../hoc/withAuth';

import styles from './CarDetail.module.scss';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const data = await CarService.getCarById(id);
      setCar(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className={styles.car}>
      <Link to="/">Back</Link>
      <Car car={car} />
    </div>
  );
};

export default withAuth(CarDetail);
