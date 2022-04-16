require('dotenv').config();
require('./db').connect();

const seedDB = async () => {
  const Product = require('../models/Product');
  // Seed the database with products
  await Product.create({
    name: 'Upside Sit-to-Stand Desk, Extended Range with Simple Paddle',
    slug: 'upside-sit-to-stand-desk-extended-range-with-simple-paddle',
    category: 'tables-and-desks',
    imageURL:
      'https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-TJRA-2946-LJSNCUN-HWL-HPWL-TRK_1000x1000.png?v=1645723764',
    description:
      "Work the more natural way. Upside's simple paddle control lets you decide when to sit or stand. Move throughout your day for a boost in comfort, productivity, and focus.",

    notes: '',
    numberInStock: 433,
    price: 73900,
  });

  await Product.create({
    name: 'Jive Desk with C-Leg Base',
    slug: 'jive-desk-with-c-leg-base',
    category: 'tables-and-desks',
    imageURL:
      'https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-TCRA-2448-LJSNBG4A-HKP-HPKP-TRK_1000x1000.png?v=1645719442',
    description:
      "Get the formal look of a workplace desk right at home. Jive's shapely base supports a spacious surface that lets you see everything you need at a glance.",

    notes: '',
    numberInStock: 234,
    price: 35900,
  });

  await Product.create({
    name: 'Ergotron WorkFit Corner Standing Desk Converter',
    slug: 'ergotron-workFit-corner-standing-desk-converter',
    category: 'tables-and-desks',
    imageURL:
      'https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-Ergotron_WorkFit_Corner_Product_Photo_9_1000x1000.jpg?v=1646071096',
    description:
      'Quickly convert any corner desk or table into a workstation that lets you sit or stand through your day. Ideal for small spaces.',

    notes: '',
    numberInStock: 243,
    price: 52500,
  });
};

seedDB();
