import express from 'express';
import Order from '../../models/orderModel.js';

//Save order deatils
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

//Retriview order details -> by using order ID
const get_orders_byId = async function (req, res) {
  //using the order ID
  const order = await Order.findById(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: 'Order Not Found...!!' });
  }
};

//Update the order data and connect with Mailgun for sending emails to the users
const update_order = async function (req, res) {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'email name'
  );
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
    mailgun()
      .messages()
      .send(
        {
          from: 'Revonta <revonta@mg.revontaherbs.com>',
          to: `${order.user.name} <${order.user.email}>`,
          subject: `New order ${order._id}`,
          html: payOrderEmailTemplate(order),
        },
        (error, body) => {
          if (error) {
            console.log(error);
          } else {
            console.log(body);
          }
        }
      );

    res.send({ message: 'Order Paid', order: updatedOrder });
  } else {
    res.status(404).send({ message: 'Order Not Found' });
  }
};

//Delete order
const DeleteOrder = async function (req, res) {
  const order = await Order.findById(req.params.id);
  if (order) {
    await order.deleteOne();
    res.send({ message: 'Order Deleted Successfully..!' });
  } else {
    res.status(404).send({ message: 'Order Not Found' });
  }
};

//Return num of orders and total prices regarding the days
const dailyOrders = await Order.aggregate([
  {
    $group: {
      _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }, //Format is Year-Month-Day
      orders: { $sum: 1 }, //return number of orders
      sales: { $sum: '$totalPrice' },
    },
  },
  { $sort: { _id: 1 } },
]);

const productCategories = await Product.aggregate([
  {
    $group: {
      _id: '$category',
      count: { $sum: 1 },
    },
  },
]);

export default {
  creat_Order,
  get_orders,
  get_orders_byId,
  update_order,
  DeleteOrder,
};
