import { FC, memo } from 'react';

import Car from '../car/Car';

import { ICar } from '../../../types/car.interface';

import styles from './Catalog.module.scss';

const ERROR_MESSAGE = 'There are not cars!';

interface CatalogProps {
  cars?: ICar[];
}

const Catalog: FC<CatalogProps> = ({ cars = [] }) => {
  const isCars = cars.length;

  return (
    <div className={styles.cars}>
      {isCars ? (
        cars.map((car) => (
          <Car
            key={car.id}
            car={car}
          />
        ))
      ) : (
        <p>{ERROR_MESSAGE}</p>
      )}
    </div>
  );
};

export default memo(Catalog);
