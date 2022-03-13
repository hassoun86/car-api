import { Request, Response } from 'express';
import { Service } from 'typedi';
import { CarService } from '../services/car.service';
import { createCarValidator } from '../validator/create-car.validator';
import { Logger } from 'tslog';
import { updateCarValidator } from '../validator/update-car.validator';

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
    } catch (error) {
      return res.send(error);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const result = await this.carService.getAll();

      return res.json(result);
    } catch (error) {
      return res.send(error);
    }
  }

  async create(req: Request, res: Response) {
    const { body } = req;
    const isValid = createCarValidator(body);

    if (!isValid) {
      return res.send(createCarValidator.errors);
    }

    try {
      const result = await this.carService.create(body);

      return res.json(result);

    } catch (error) {
      return res.send(error);
    }

  }

  async update(req: Request, res: Response) {
    const { body } = req;
    const { id } = req.params;

    const isValid = updateCarValidator(body);

    if (!isValid) {
      return res.send(updateCarValidator.errors);
    }

    try {
      const result = await this.carService.update(id, body);

      return res.json(result);

    } catch (error) {
      return res.send(error);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const result = await this.carService.delete(id);

      return res.json(result);

    } catch (error) {
      return res.send(error);
    }
  }
}