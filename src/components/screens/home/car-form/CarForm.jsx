import { useCallback, memo } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import styles from './CarForm.module.scss';
import { CarService } from '../../../../services/CarService';

const CarForm = () => {
  const { register, reset, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ['add car'],
    (data) => CarService.addCar(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('cars');
        reset();
      },
    }
  );

  const handleCreateCar = useCallback((data) => {
    mutate(data);
  }, []);

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
