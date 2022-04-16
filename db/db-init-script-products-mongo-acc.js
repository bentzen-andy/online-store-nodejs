require('dotenv').config();
require('./db').connect();

const seedDB = async () => {
  const Product = require('../models/Product');
  // Seed the database with products
  await Product.create({
    name: 'Belong Blotter',
    slug: 'belong-blotter',
    category: 'accessories',
    imageURL:
      'https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-Ash_1000x1000.jpg?v=1643224092',
    description:
      'Belong work tools help keep everything neat and organized with a simple clean design. This desk blotter is designed to provide protection for your work area with a durable, wipeable faux leather surface.',

    notes: '',
    numberInStock: 193,
    price: 27500,
  });

  await Product.create({
    name: 'Belong Document Tray',
    slug: 'belong-document-tray',
    category: 'accessories',
    imageURL:
      'https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-Belong_Hanging_Paper_Tray_1000x1000.jpg?v=1643295008',
    description:
      'Belong work tools help keep everything in its place with a simple clean design. This paper tray has a spot for all your papers and is designed to hang neatly from a Belong territory screen. It can also be used right on your desktop as to keep important items from getting lost.',

    notes: '',
    numberInStock: 125,
    price: 2500,
  });

  await Product.create({
    name: 'Power Module with Mounting Bracket',
    slug: 'power-module-with-mounting-bracket',
    category: 'accessories',
    imageURL:
      'https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-US-R20-0027_1_1000x1000.jpg?v=1646070403',
    description:
      "No more reaching under or behind your desk. Bring power and charging right to the top of your worksurface with a power module that clamps right to the edge. Once you attach the bracket with just a few screws, the unit can be clamped to any desktop edge without tools. Simply plug the cord into a nearby outlet, and you're good to go.",

    notes: '',
    numberInStock: 433,
    price: 14000,
  });
};

seedDB();
