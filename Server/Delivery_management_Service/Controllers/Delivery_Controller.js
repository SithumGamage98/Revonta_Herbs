import express from 'express';
import Delivery from '../models/Delivery_Model';

//Create a delivery
const add_delivery = async function (req, res) {
  const newDelivery = new Delivery({
    fullName: req.body.fullName,
    address: req.body.address,
    city: req.body.city,
    postalCode: req.body.postalCode,
    country: req.body.country,
  });

  const Delivery = await newDelivery.save();
  res.status(201).send({ message: 'Delivery added successfully!', Delivery });
};

export default {
  add_delivery,
};
