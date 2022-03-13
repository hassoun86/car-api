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
  required: [],
  additionalProperties: false,
  anyOf: [
    { required: ['brand'] },
    { required: ['color'] },
    { required: ['model'] },
    { required: ['fuelType'] },
    { required: ['year'] },
    { required: ['price'] },
    { required: ['numberOfSeat'] },
  ],
};

const updateCarValidator = ajvInstance.compile(schema);

export { updateCarValidator };