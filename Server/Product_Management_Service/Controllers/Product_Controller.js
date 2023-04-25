import express from 'express';
import Product from '../../models/productModel';

//get all products

const get_products = async function (req, res) {
  const products = await Product.find();
  res.send(products); //from product model
};

// get product slugs
const get_ProductSlugs = async function (req, res) {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
};

const get_productsById = async function (req, res) {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
};

export default {
  search_products,
  get_products,
  get_ProductSlugs,
  get_productsById,
  get_ProductCategories,
};
