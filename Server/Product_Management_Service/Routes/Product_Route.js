import express from 'express';
import {
  create_product,
  update_product,
  delete_product,
  get_products,
  get_ProductSlugs,
  get_productsById,
} from '../Controllers/Product_Controller';

const ProductRouter = express.Router();

ProductRouter.post('/', create_product);
ProductRouter.put('/:id', update_product);
ProductRouter.delete('/:id', delete_product);
ProductRouter.get('/', get_products);
ProductRouter.get('/:id', get_productsById);
ProductRouter.put('/slug/:slug', get_ProductSlugs);

export default ProductRouter;
