import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { ICar } from '../../../types/car.interface';

import styles from './Car.module.scss';

interface CarProps {
  car: ICar;
}

const Car: FC<CarProps> = ({ car }) => (
  <div className={styles.car}>
    <div
      style={{ backgroundImage: `url(${car.image})` }}
      className={styles.image}
    />
    <div className={styles.info}>
      <h2>{car.name}</h2>
      <p>{car.price}</p>
      <Link to={`/car/${car.id}`}>Read more</Link>
    </div>
  </div>
);

export default memo(Car);
