import express from 'express';
import Product from '../../models/productModel';

const create_product = async function (req, res) {
  const newProduct = new Product({
    name: 'sample name ' + Date.now(), //Date is use to create a unique name/slug -> Avoid errors
    slug: 'sample-name-' + Date.now(),
    category: 'sample category',
    image: '/images/baby_3.png',
    price: 0,
    countInStock: 0,
    brand: 'sample brand',
    rating: 0,
    numReviews: 0,
    description: 'sample description',
  });
  const product = await newProduct.save();
  res.send({ message: 'Product Added..!', product });
};

//Update Product detailos
const update_product = async function (req, res) {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    // if product is exsits in the database
    product.name = req.body.name;
    product.slug = req.body.slug;
    product.category = req.body.category;
    product.image = req.body.image;
    product.price = req.body.price;
    product.countInStock = req.body.countInStock;
    product.brand = req.body.brand;
    product.description = req.body.description;

    await product.save();
    res.send({ message: 'Product Updated Successfully..!' });
  } else {
    // product not  on the database
    res.status(404).send({ message: 'Product Not Found' });
  }
};

//Delete Product
const delete_product = async function (req, res) {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.deleteOne();
    res.send({ message: 'Product Deleted' });
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
};

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

//Get Products by ID
const get_productsById = async function (req, res) {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
};

export default {
  create_product,
  update_product,
  delete_product,
  get_products,
  get_ProductSlugs,
  get_productsById,
};
