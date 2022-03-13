import { Request, Response } from 'express';
import { Service } from 'typedi';
import { CarService } from '../services/car.service';
import { carValidator } from '../validator/car.validator';
import { Logger } from 'tslog';

@Service()
export class CarController {
  private logger: Logger;
  constructor(
    private readonly carService: CarService,
  ) {
    this.logger = new Logger({ name: CarController.name });
    this.carService = new CarService(this.logger);
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const result = await this.carService.getOne(id);

      return res.json(result);
    } catch (err) {
      throw err;
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const result = await this.carService.getAll();

      return res.json(result);
    } catch (err) {
      throw err;
    }
  }

  async create(req: Request, res: Response) {
    const { body } = req;
    const isValid = carValidator(body);

    if (!isValid) {
      return res.send(carValidator.errors);
    }

    const result = await this.carService.create(body);

    return res.json(result);
  }

  async update(req: Request, res: Response) {
    const { body } = req;
    const { id } = req.params;

    const result = await this.carService.update(id, body);

    return res.json(result);
  }
}