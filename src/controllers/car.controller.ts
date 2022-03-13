import { Request, Response } from 'express';
import { Service } from 'typedi';
import { CarService } from '../services/car.service';

@Service()
export class CarController {
  constructor(
    private readonly carService: CarService,
  ) { }

  async getAll(req: Request, res: Response) {
    console.log(this.carService);
    try {
      const result = await this.carService.getAll();

      return res.json(result);
    } catch (err) {
      throw err;
    }

  }
}