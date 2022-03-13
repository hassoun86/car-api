import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import { CarController } from '../controllers/car.controller';
const router = Router();

const carController = Container.get(CarController);

router.get('/', (req: Request, res: Response) => carController.getAll(req, res));

export { router as carRouter };