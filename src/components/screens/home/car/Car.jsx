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
        <button>Read more</button>
      </div>
    </div>
  );
};

export default Car;
