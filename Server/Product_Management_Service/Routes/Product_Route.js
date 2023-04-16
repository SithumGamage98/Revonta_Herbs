import express from 'express';
import {
  search_products,
  get_products,
  get_ProductSlugs,
  get_productsById,
  get_ProductCategories,
} from '../Controllers/Product_Controller';

const ProductRouter = express.Router();

ProductRouter.post('/', get_products);
ProductRouter.get('/search', search_products);
ProductRouter.get('/:id', get_productsById);
ProductRouter.put('/slug/:slug', get_ProductSlugs);
ProductRouter.put('/categories', get_ProductCategories);

export default ProductRouter;
