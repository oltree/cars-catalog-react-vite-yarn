export interface ICar {
  id: string;
  image: string;
  price: string;
  name: string;
}

export interface ICarData extends Omit<ICar, 'id'> {}
