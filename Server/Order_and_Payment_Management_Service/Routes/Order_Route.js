import express from 'express';
import {
  creat_Order,
  get_orders,
  get_orders_byId,
  update_order,
  DeleteOrder,
} from '../Controllers/Order_Controller';

const orderRouter = express.Router();

orderRouter.post('/', creat_Order);
orderRouter.get('/mine', get_orders);
orderRouter.get('/:id', get_orders_byId);
orderRouter.put('/:id/pay', update_order);
orderRouter.put('/:id', DeleteOrder);

export default orderRouter;
