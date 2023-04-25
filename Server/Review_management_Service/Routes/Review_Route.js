import express from 'express';
import { send_Review } from '../Controllers/Review_Controller';

const reviewRouter = express.Router();

reviewRouter.post('/:id/reviews', send_Review);
export default reviewRouter;
