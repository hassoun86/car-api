import mongoose from 'mongoose';
import { ICar } from '../interfaces/car.interface';

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  numberOfSeat: {
    type: Number,
    required: true,
  },
});

const carModel = mongoose.model<ICar>('Car', carSchema);

export { carModel };