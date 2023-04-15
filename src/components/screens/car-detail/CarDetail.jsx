import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

import Car from '../../ui/car/Car';

import { CarService } from '../../../services/CarService';
import { withAuth } from '../../../hoc/withAuth';

import styles from './CarDetail.module.scss';

const CarDetail = () => {
  const { id } = useParams();
  const { data } = useQuery(['car'], () => CarService.getCarById(id));

  return (
    <div className={styles.car}>
      <Link to="/">Back</Link>
      <Car car={data} />
    </div>
  );
};

export default withAuth(memo(CarDetail));
