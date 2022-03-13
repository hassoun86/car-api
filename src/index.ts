import 'reflect-metadata';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { carRouter } from './routes/car.route';
import { Logger } from 'tslog';
import { config } from '../config/config';

const logger = new Logger({ name: config.app.name });

const app = express();

app.use(bodyParser.json());

app.use('/cars', carRouter);

mongoose.connect(config.db.URL, {}, () => {
  logger.info('connected to database');
});

app.listen(config.app.port, () => {
  logger.info(`server started at ${config.app.host}:${ config.app.port }`);
});