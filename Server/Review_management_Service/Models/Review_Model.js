import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true, //Store crated date and updated date
  }
);

const Reviews = mongoose.model('User', reviewSchema);
export default Reviews;
