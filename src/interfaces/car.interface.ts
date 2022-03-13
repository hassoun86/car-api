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
  getOne(id: string): Promise<ICar>;
  update(id: string, payload: ICar): Promise<ICar>;
  create(payload: ICar): Promise<ICar>;
  delete(id: string): Promise<void>;
}