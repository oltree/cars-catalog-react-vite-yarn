import { useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseFormReset } from 'react-hook-form';

import { CarService } from '../services/CarService';
import { ICar, ICarData } from '../types/car.interface';

export const useCreateCar = (reset: UseFormReset<ICar>) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ['add car'],
    (data: ICarData) => CarService.addCar(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['cars']);
        reset();
      },
    }
  );

  const handleCreateCar = useCallback(
    (data: ICar) => {
      mutate(data);
    },
    [mutate]
  );

  return handleCreateCar;
};
