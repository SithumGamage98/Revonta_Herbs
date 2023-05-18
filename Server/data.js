//import galle from '../images/Travelo.jpeg'
import bcrypt from 'bcryptjs';
const data = {
  //user's data

  users: [
    {
      //Admin user
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
      name: 'California Gold Nutrition, LactoBif Probiotics, 30 Billion CFU, 60 Veggie Capsules',
      slug: 'California-Gold-Nutrition1',
      category: 'Supplements',
      image: '../images/suply_1.jpg',
      price: 20,
      countInStock: 10,
      brand: 'California Gold Nutrition',
      rating: 4.5,
      numReviews: 10,
      description:
        '100% Gold Guarantee/Suitable for Vegetarians/With 30 Billion CFU Per Capsule',
    },

    {
      //_id: '2',
      name: 'Life Extension, BioActive Complete B-Complex, 60 Vegetarian Capsules',
      slug: 'Life-Extension',
      category: 'Supplements',
      image: '../images/s2.png',
      price: 20,
      countInStock: 0,
      brand: 'Life Extension',
      rating: 4.5,
      numReviews: 14,
      description:
        'Gluten Free/Non-GMO LE Certified/Contains Enzymatically Active B-Vitamins/Dietary Supplement',
    },

    {
      // _id: '3',
      name: 'Lipton Iced Tea Immune Support Diet Pineapple Mango Green Tea 16.9 Fl Oz, 12 Count',
      slug: ' Healths-Harmony-greenTea',
      category: 'Supplements',
      image: '../images/greenTea.png',
      price: 14,
      countInStock: 15,
      brand: ' Healths Harmony',
      rating: 4.5,
      numReviews: 14,
      description:
        'Standardized 98% Polyphenols/75% Catechins/45% EGCG/Non-GMO/Dietary SupplementExpert Blend/Sourced from a GMP Certified Facility',
    },

    {
      // _id: '4',
      name: 'PanOxyl, Acne Foaming Wash, 10% Benzoyl Peroxide Maximum Strength, 5.5 oz (156 g)',
      slug: 'Acne-Foaming-Wash',
      category: 'Beauty',
      image: '../images/beauty1.png',
      price: 12,
      countInStock: 15,
      brand: 'PanOxyl',
      rating: 3.0,
      numReviews: 14,
      description:
        'Dermatologist Recommended/Clears Existing Acne and Helps Prevent New Breakouts from Forming/Contains Benzoyl Peroxide, an Antibacterial Ingredient/Free of Parabens, Fragrances & Phthalates/Contains Moisturizers to Prevent Dryness',
    },

    {
      // _id: '5',
      name: 'Q10 Anti-Wrinkle + Pro-Retinol Night Cream, 1.7 fl oz (48 g), Eucerin',
      slug: 'Anti-Wrinkle',
      category: 'Beauty',
      image: '../images/beauty2.png',
      price: 9.5,
      countInStock: 15,
      brand: 'Anti-Wrinkle',
      rating: 4.5,
      numReviews: 16,
      description:
        'Dermatologist Recommended - Since 1900 Sensitive Skin Experts Helps Improve the Appearance of Fine Lines and Wrinkles For over 100 years, Eucerin has pioneered skincare innovation, and today we are recognized and trusted by dermatologists as one of the leading and most recommended brands. Our products are designed to protect, repair, and enhance the health of skin - Giving you and your family the feeling of confidence that comes from radiant, healthy looking skin.Eucerin® Q10 Anti-Wrinkle + Pro Retinol Night Cream is an anti-wrinkle, moisturizing night cream made for dry, sensitive skin',
    },

    {
      // _id: '6',
      name: 'California Gold Nutrition Baby Vitamin D3 Liquid, 10 mcg (400 IU), 0.34 fl oz (10 ml), 3 Pack',
      slug: 'California-Gold-Nutrition',
      category: 'Kids and Babies',
      image: '../images/baby_1.png',
      price: 12.26,
      countInStock: 15,
      brand: 'California Gold Nutrition',
      rating: 4.5,
      numReviews: 6,
      description:
        'Vitamin D supplementation for infants is recommended because breastfed infants generally do not obtain adequate Vitamin D from other sources. Often referred to as the sunshine vitamin, Vitamin D3 is often not as available to infants because it is suggested to avoid over-exposing them to the sun for their first 6 months.',
    },

    {
      // _id: '7',
      name: 'Gerber Snacks for Baby Soothe n Chew Teething Sticks Banana, 0.53 oz Box (6 Pack)',
      slug: 'Gerber-Snacks',
      category: 'Kids and Babies',
      image: '../images/baby_2.png',
      price: 14.5,
      countInStock: 4,
      brand: 'Gerber Snacks',
      rating: 2.5,
      numReviews: 8,
      description:
        'At GoGo squeeZ, our mission is to make it easier for families to be healthier and happier. We?re proud to be the leading squeezable, re-closable, 100% fruit in a pouch. Our products are crafted with high-quality, natural ingredients to provide wholesome goodness for squeeZing, and enjoying wherever life takes you. With over 20 varieties of fruit and veggieZ on-the-go, we?re more than just Applesauce, we?re Goodness on the Go!',
    },

    {
      // _id: '8',
      name: 'Rachael Ray Nutrish Soup Bones Dog Treats, Real Beef & Barley Flavor, 12.6oz, 6 bones',
      slug: 'Rachael-Ray',
      category: 'Pets',
      image: '../images/pet_1.png',
      price: 6.45,
      countInStock: 16,
      brand: 'Rachael Ray',
      rating: 3.5,
      numReviews: 20,
      description:
        'Savory long-lasting chews made with real beef. Rachael Ray Nutrish Soup Bones Beef & Barley Flavor are made with real beef and hearty barley. These long-lasting chews have all the deliciousness of a wholesome soup bone with a tender, meaty center inside.',
    },

    {
      // _id: '9',
      name: 'Canine Carry Outs Chicken Flavor Dog Treats, 4.5oz Bag',
      slug: 'Canine-Carry-Outs',
      category: 'Pets',
      image: '../images/pets_2.png',
      price: 8.45,
      countInStock: 9,
      brand: 'Canine Carry Outs',
      rating: 3.5,
      numReviews: 22,
      description:
        'Your dog goes wild whenever you bring in a big bag of chicken leftovers from your favorite restaurant. Now you can give them the flavors they love with Canine Carry Outs Chicken Flavor dog snacks. These soft dog treats don’t just look like real strips of grilled chicken; they’re made with real chicken to get your dog drooling every time you crack open the bag. And their fun shapes make for an exciting and enticing treating experience that never gets old. Our small dog treats are the perfect way to reward your dog for doing what they do best—being amazing. Pick up a bag for your dog to enjoy.',
    },
    {
      // _id: '10',
      name: 'Green Giant Corn On The Cob Extra Sweet, 12 Ct (Frozen)',
      slug: 'Green-Giant',
      category: 'Grocery',
      image: '../images/gro_1.jpg',
      price: 13.25,
      countInStock: 3,
      brand: 'Green Giant ',
      rating: 3.5,
      numReviews: 2,
      description:
        'Your dog goes wild whenever you bring in a big bag of chicken leftovers from your favorite restaurant. Now you can give them the flavors they love with Canine Carry Outs Chicken Flavor dog snacks. These soft dog treats don’t just look like real strips of grilled chicken; they’re made with real chicken to get your dog drooling every time you crack open the bag. And their fun shapes make for an exciting and enticing treating experience that never gets old. Our small dog treats are the perfect way to reward your dog for doing what they do best—being amazing. Pick up a bag for your dog to enjoy.',
    },

    {
      // _id: '11',
      name: 'Idahoan Four Cheese Mashed Potatoes, 4 oz Pouch',
      slug: 'Idahoan-Four',
      category: 'Grocery',
      image: '../images/groc_2.png',
      price: 1.25,
      countInStock: 30,
      brand: 'Idahoan Four',
      rating: 4.5,
      numReviews: 13,
      description:
        'Refer to the product label for full dietary information, which may be available as an alternative product image.',
    },

    {
      // _id: '12',
      name: 'Bach Original Flower Remedies, Beech for Tolerance, 20mL Dropper',
      slug: 'Bach-Original',
      category: 'Herbs and Homeopathy',
      image: '../images/homio_3.jpg',
      price: 3.25,
      countInStock: 10,
      brand: 'Bach Original',
      rating: 2.5,
      numReviews: 19,
      description:
        'Be More Tolerant. The Bach® remedy Beech encourages the positive potential to see the good in others despite imperfections, to release rigid attitudes, and build a sense of compassion. Ideal when meeting with people you know who get under your skin. Maintain a sense of tolerance, make allowances, and strengthen your relationships.',
    },

    {
      // _id: '13',
      name: 'Bach RESCUE REMEDY Dropper 20mL, Natural Stress Relief, Non-Habit Forming',
      slug: 'Bach-RESCUE',
      category: 'Herbs and Homeopathy',
      image: '../images/homio_2.jpg',
      price: 1.25,
      countInStock: 0,
      brand: 'Bach RESCUE REMEDY Dropper',
      rating: 3.5,
      numReviews: 40,
      description:
        'Be More Tolerant. The Bach® remedy Beech encourages the positive potential to see the good in others despite imperfections, to release rigid attitudes, and build a sense of compassion. Ideal when meeting with people you know who get under your skin. Maintain a sense of tolerance, make allowances, and strengthen your relationships.',
    },

    {
      // _id: '14',
      name: 'Boiron Oscillococcinum 36 Count, Homeopathic Medicine for Flu-Like Symptoms Relief',
      slug: 'Boiron-Oscillococcinum',
      category: 'Herbs and Homeopathy',
      image: '../images/homio.png',
      price: 2.35,
      countInStock: 2,
      brand: 'Boiron-Oscillococcinum',
      rating: 1.5,
      numReviews: 30,
      description:
        'Oscillo-coccinums 36 dosage size of sweet-tasting pellets dissolve quickly & easily under the tongue; no water, chewing, or swallowing required. HOMEOPATHIC MEDICINE uses highly diluted biological, botanical, or mineral substances to relieve symptoms. Since 1932, Boiron has been providing quality medicines and is a world leader in homeopathy. Common misspellings include boron oscillo, oscillio, oscillium, and occilococcinum. Also occicilium, occsillium ocsillium, oscicillium oscilliam, oscillicum kid oscillinium oscilliococinum 60. osscillium remedy oscicullum oscilloccinum occisilium.',
    },

    {
      // _id: '15',
      name: 'Enfamil NeuroPro Baby Formula, Triple Prebiotic Immune Blend with 2 FL HMO & Expert Recommended Omega-3 DHA',
      slug: 'Enfamil-NeuroPro-Baby-Formula',
      category: 'Herbs and Homeopathy',
      image: '../images/baby_3.png',
      price: 1.35,
      countInStock: 14,
      brand: 'Enfamil-NeuroPro-Baby-Formula',
      rating: 2.5,
      numReviews: 16,
      description:
        'Our Enfamil NeuroPro is backed by research on breast milk and clinical studies on its brain building nutrition. Most notably, it has brain-building Omega 3 DHA as recommended by experts. DHA is found in Enfamil NeuroPro has been shown to provide long-term brain-building benefits all the way up to age 5. Enfamil NeuroPro also has naturally occurring MFGM components',
    },

    {
      // _id: '16',
      name: 'Suave Skin Solutions Body Lotion Silkening with Baby Oil 32 oz Natural Stress Relief, Non-Habit Forming',
      slug: 'Suave-Skin -Solutions',
      category: 'Kids and Babies',
      image: '../images/baby_4.png',
      price: 1.35,
      countInStock: 14,
      brand: 'Suave Skin Solutions ',
      rating: 2.5,
      numReviews: 16,
      description:
        'Clinically Proven to moisturize as well as Crabtree& Evelyn Jojoba Oil Moisturising Body Lotion Our Suave Skin Solutions Silkening Body Lotion with baby oil moisturizes skin deeply and leaves it smelling powdery fresh and feeling soft. This lotion is enriched with baby oil and helps skin feel pampered and silky smooth to the touch. Its gentle enough to use on the whole family, leaving everyones skin feeling soft and smelling fresh. HOW TO USE For soft, powdery fresh skin, apply a generous amount with fingertips',
    },
  ],
};
export default data;
