import express from 'express';
import Order from '../../models/orderModel.js';

//Save order
const creat_Order = async function (req, res) {
  const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
  });

  const order = await newOrder.save();
      res.status(201).send({ message: 'New order created successfully!', order });
};

//For order History -> Return List Of orders of current user
const get_orders = async function e(req, res) {
  const orders = await Order.find({ user: req.user._id });
      res.send(orders);
};

//Retriview order details -> by using ID
const get_orders_byId = async function (req, res) {
  const order = await Order.findById(req.params.id); //using the order ID
  if (order) {
      res.send(order);
  } else {
      res.status(404).send({ message: 'Order Not Found...!!' });
  }
};

//update order data
const update_order = async function (req, res) {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();
    res.send({ message: 'Order Paid', order: updatedOrder });
  } else {
    res.status(404).send({ message: 'Order Not Found' });
  }
};

export default { creat_Order, get_orders, get_orders_byId, update_order };
