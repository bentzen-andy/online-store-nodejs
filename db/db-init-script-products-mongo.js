require('dotenv').config();
require('./db').connect();

const seedDB = async () => {
  const Product = require('../models/Product');
  // Seed the database with products
  await Product.create({
    name: 'Nintendo Switch',
    slug: 'nintendo-switch',
    category: 'electronics',
    image_url:
      'https://image.shutterstock.com/image-photo/cheshire-england-august-7th-2018-260nw-1173580291.jpg',
    description:
      '2021 Newest Nintendo Switch OLED Model 64GB Gaming Console with White Joy-Con, 7 inch 1280 x 720 OLED Touchscreen Display, Built-in Speaker, WiFi, Bluetooth 4.1',
    notes: '',
    number_in_stock: 26,
    price: 519.0,
  });

  await Product.create({
    name: 'Xbox Series S',
    slug: 'xbox-series-s',
    category: 'electronics',
    image_url: 'https://m.media-amazon.com/images/I/71NBQ2a52CL._SL1500_.jpg',
    description:
      'Introducing the Xbox Series S, the smallest, sleekest Xbox console ever. Experience the speed and performance of a next-gen all-digital console at an accessible price point.',
    notes: '',
    number_in_stock: 34,
    price: 499.0,
  });

  await Product.create({
    name: 'Play-Station 4',
    slug: 'play-station-4',
    category: 'electronics',
    image_url:
      'https://m.media-amazon.com/images/I/61XsKLeku-L._AC_SL1251_.jpg',
    description:
      'Play-Station 4 PS4 1TB Slim Edition Gaming Console with 1 Wireless Controller, Jet Black - 8-core x86-64 AMD Jaguar CPU, 1.84 TFLOPS AMD Radeon GPU, 8GB GDDR5 Memory, WiFi, Bluetooth',
    notes: '',
    number_in_stock: 13,
    price: 649.0,
  });
};

seedDB();
