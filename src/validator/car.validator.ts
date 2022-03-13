import ajv, { JSONSchemaType } from 'ajv';
import { ICar } from '../interfaces/car.interface';
const ajvInstance = new ajv();

const schema: JSONSchemaType<ICar> = {
  type: 'object',
  properties: {
    brand: { type: 'string' },
    color: { type: 'string' },
    model: { type: 'string' },
    fuelType: { type: 'string' },
    year: { type: 'number' },
    price: { type: 'number' },
    numberOfSeat: { type: 'number' },
  },
  required: ['brand', 'color', 'fuelType', 'model', 'numberOfSeat', 'price', 'year'],
  additionalProperties: false,
};

const carValidator = ajvInstance.compile(schema);

export { carValidator };