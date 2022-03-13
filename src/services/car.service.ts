import { Service } from 'typedi';
import { ICar, ICarService } from '../interfaces/car.interface';
import { carModel } from '../modules/Car.module';

@Service()
export class CarService implements ICarService {
  constructor() { }
  get(): Promise<ICar> {
    throw new Error('Method not implemented.');
  }
  update(): Promise<ICar> {
    throw new Error('Method not implemented.');
  }
  create(): Promise<ICar> {
    throw new Error('Method not implemented.');
  }
  async getAll(): Promise<ICar[]> {
    try {
      const result = await carModel.find();

      return result;
    } catch (err) {
      console.log(err);

      throw err;
    }

  }

}