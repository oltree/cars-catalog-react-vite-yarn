import { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './Car.module.scss';

const Car = ({ car }) => {
  return (
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
};

export default memo(Car);
