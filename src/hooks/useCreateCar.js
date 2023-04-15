import { useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CarService } from '../services/CarService';

export const useCreateCar = (reset) => {
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

  const handleCreateCar = useCallback(
    (data) => {
      mutate(data);
    },
    [mutate]
  );

  return handleCreateCar;
};
