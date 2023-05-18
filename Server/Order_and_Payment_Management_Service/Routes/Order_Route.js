import express from 'express';
import {
  creat_Order,
  get_orders,
  get_orders_byId,
  update_order,
  DeleteOrder,
} from '../Controllers/Order_Controller';

const orderAndPaymentRouter = express.Router();

orderAndPaymentRouter.post('/', creat_Order);
orderAndPaymentRouter.get('/mine', get_orders);
orderAndPaymentRouter.get('/:id', get_orders_byId);
orderAndPaymentRouter.put('/:id/pay', update_order);
orderAndPaymentRouter.put('/:id', DeleteOrder);

export default orderRouter;
