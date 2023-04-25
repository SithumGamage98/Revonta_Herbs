import express from 'express';
import { add_delivery } from '../Controllers/Delivery_Controller';

const deliveryRoute = express.Router();

deliveryRoute.post('/', add_delivery);

export default deliveryRoute;
