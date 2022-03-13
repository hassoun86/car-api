export interface ICar {
  brand: string;
  color: string;
  model: string;
  fuelType: string;
  year: number;
  price: number;
  numberOfSeat: number;
}

export interface ICarService {
    getAll(): Promise<ICar[]>;
    get(): Promise<ICar>;
    update(): Promise<ICar>;
    create(): Promise<ICar>;
}