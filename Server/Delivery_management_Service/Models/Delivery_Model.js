import mongoose from 'mongoose';

const deliveryScheama = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Delivery = mongoose.model('User', deliveryScheama);
export default Delivery;
