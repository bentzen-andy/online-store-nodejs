require('dotenv').config();
require('./db').connect();

const seedDB = async () => {
  const Product = require('../models/Product');
  // Seed the database with products
  await Product.create({
    name: 'Soji Mesh Office Chair',
    slug: 'soji-mesh-office-chair',
    category: 'seating',
    imageURL:
      'https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-SJT-20-704A1A_6M_AR_XT_10_TR_7_TR_LE_1000x1000-REVISED_1000x1000.jpg?v=1646159817',
    description:
      'Easy to use, incredibly comfortable, and totally supportive —Soji checks every box for an ergonomic chair that means business. Airy, breathable mesh offers firm flexibility that naturally regulates body temperature.',
    notes: '',
    numberInStock: 435,
    price: 61400.0,
  });

  await Product.create({
    name: 'Zody Mesh Office Chair',
    slug: 'zody-mesh-office-chair',
    category: 'seating',
    imageURL:
      'https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-SZT-20-704MA1_JB_SC_MA_2_TR_UFM_PM_P-No-Lumbar-REVISED_1000x1000.jpg?v=1646161936',
    description:
      "It's no wonder Zody has been our most popular chair for over a decade, with more than 3 million in use around the world. It's also the first (and only) chair endorsed by the American Physical Therapy Association. Airy, breathable mesh offers firm flexibility that naturally regulates body temperature.",
    notes: '',
    numberInStock: 345,
    price: 110900.0,
  });

  await Product.create({
    name: 'Very Mesh Office Chair',
    slug: 'very-mesh-office-chair',
    category: 'seating',
    imageURL:
      'https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-SCT-20-7041-4TFL-MSF-TRF-TRF-TRF-R0_1000x1000.jpg?v=1646161610',
    description:
      "Built for the long haul, Very keeps you comfortable for hours on end, day after day. It's an ergonomic classic with a fresh, modern look, offering an array of adjustments for personalized support. Airy, breathable mesh offers firm flexibility that naturally regulates body temperature.",
    notes: '',
    numberInStock: 345,
    price: 80400.0,
  });
};

seedDB();
