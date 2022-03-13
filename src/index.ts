import 'reflect-metadata';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { carRouter } from './routes/car.route';
const app = express();

app.use(bodyParser.json());

app.use('/cars', carRouter);

mongoose.connect('mongodb://localhost:27017/car', {}, () => {
  console.log('connected to database');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started at http://localhost:${ port }`);
});