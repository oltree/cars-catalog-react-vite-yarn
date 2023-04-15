import { memo } from 'react';
import { useForm } from 'react-hook-form';

import { useCreateCar } from '../../../hooks/useCreateCar';

import styles from './CarForm.module.scss';

const CarForm = () => {
  const { register, reset, handleSubmit } = useForm();

  const handleCreateCar = useCreateCar(reset);

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
