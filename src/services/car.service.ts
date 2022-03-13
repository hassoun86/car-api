import { Logger } from 'tslog';
import { Service } from 'typedi';
import { ICar, ICarService } from '../interfaces/car.interface';
import { carModel } from '../modules/Car.module';

@Service()
export class CarService implements ICarService {
  constructor(private logger: Logger) {
    this.logger = new Logger({ name: CarService.name });
  }
  async getOne(id: string): Promise<ICar> {
    this.logger.info(`Attempting to get car with id: ${id}`);

    try {
      const result = await carModel.findById(id);

      if (!result) {
        throw new Error();
      }

      this.logger.info(`Successfully got car with id: ${id}`);

      return result;
    } catch (error) {
      this.logger.error(`Failed to get car with id:${id}`, error);

      throw error;
    }
  }
  async update(id: string, payload: ICar): Promise<ICar> {
    this.logger.info(`Attempting to update car with id: ${id}`);

    try {
      const car = await carModel.findByIdAndUpdate(id, payload, { new: true });

      if (!car) {
        throw new Error();
      }

      this.logger.info(`Successfully updated car with id: ${id}`);

      return car;
    } catch (error) {
      this.logger.error(`Failed to get car with id:${id}`, error);

      throw error;
    }
  }
  create(payload: ICar): Promise<ICar> {
    this.logger.info('Attempting to create a car');

    try {
      const carEntity = new carModel({
        ...payload,
      });

      const car = carEntity.save();

      this.logger.info('Successfully created a car');

      return car;
    } catch (error) {
      this.logger.error('Failed to create a car', error);

      throw error;
    }
  }
  async getAll(): Promise<ICar[]> {
    this.logger.info('Attempting to get all cars');

    try {
      const result = await carModel.find();

      this.logger.info('Successfully got all cars');

      return result;
    } catch (error) {
      this.logger.error('Failed to get all cars', error);

      throw error;
    }
  }

}