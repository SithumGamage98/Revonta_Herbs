//import galle from '../images/Travelo.jpeg'
import bcrypt from 'bcryptjs';
const data = {
  //user's data

  users: [
    {
      // Admin user
      name: 'Sithum',
      email: 'sithum98@gmail.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
    {
      //normal user
      name: 'Heshan',
      email: 'Heshan98@gmail.com',
      password: bcrypt.hashSync('9999'),
      isAdmin: false,
    },
  ],

  //Products data
  products: [
    {
      // _id: '1',
      name: 'Aloe Vera index',
      slug: 'Alovera-Organic-Mix',
      category: 'Cream',
      image: '../images/Aloe_Vera.jpg',
      price: 1200,
      countInStock: 10,
      brand: 'Aloe vera pvt',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality faceial product',
    },

    {
      //_id: '2',
      name: 'Skin Green Tea',
      slug: 'Skin-Green-Tea2',
      category: 'Green Tea',
      image: '../images/Skin_care.jpg',
      price: 12,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product1',
    },

    {
      // _id: '3',
      name: 'Brand Green Tea',
      slug: 'Brand-green-tea',
      category: 'GreenTea',
      image: '../images/Brand_green_tea.jpg',
      price: 12,
      countInStock: 15,
      brand: 'Brand yyt',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product11',
    },

    {
      // _id: '4',
      name: 'Ayur Green Tea',
      slug: 'Ayur-green-tea',
      category: 'GreenTea778',
      image: '../images/GreenTea.jpg',
      price: 12,
      countInStock: 15,
      brand: 'Ayur pvt',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product7766',
    },
  ],
};
export default data;
