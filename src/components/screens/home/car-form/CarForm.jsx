import { useCallback, memo } from 'react';
import { useForm } from 'react-hook-form';

import styles from './CarForm.module.scss';

const CarForm = ({ setCars }) => {
  const { register, reset, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const handleCreateCar = useCallback(
    (data) => {
      setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
      reset();
    },
    [setCars]
  );

  return (
    <form
      onSubmit={handleSubmit(handleCreateCar)}
      className={styles.form}
    >
      <input
        type="text"
        {...register('name', { required: true })}
        placeholder="Name"
      />
      <input
        type="text"
        {...register('price', { required: true })}
        placeholder="Price"
      />
      <input
        type="text"
        {...register('image')}
        placeholder="Image"
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default memo(CarForm);
