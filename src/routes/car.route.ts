import 'reflect-metadata';
import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import { CarController } from '../controllers/car.controller';
const router = Router();

const carController = Container.get(CarController);

router.get('/' , (req: Request, res: Response) => carController.getAll(req, res));
router.post('/', (req: Request, res: Response) => carController.create(req, res));
router.patch('/:id', (req: Request, res: Response) => carController.update(req, res));
router.get('/:id', (req: Request, res: Response) => carController.getOne(req, res));
router.delete('/:id', (req: Request, res: Response) => carController.delete(req, res));

export { router as carRouter };