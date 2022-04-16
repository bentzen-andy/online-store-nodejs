require('dotenv').config();
require('./db').connect();

const seedDB = async () => {
  const Product = require('../models/Product');
  // Seed the database with products
  await Product.create({
    name: 'Talia Table Light',
    slug: 'talia-table-light',
    category: 'lighting',
    imageURL:
      'https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-Talia_Product_Photo_1_1000x1000.jpg?v=1645723164',
    description:
      'Talia is smart and powerful—yet refined—in a compact design that embraces only the essential elements to fulfill its purpose. Enjoy maximum light control, paired with fully dimmable and glare-free flat light technology, to satisfy both task and ambient lighting needs in one table lamp.',

    notes: '',
    numberInStock: 433,
    price: 19500,
  });

  await Product.create({
    name: 'Lana Floor Light',
    slug: 'lana-floor-light',
    category: 'lighting',
    imageURL:
      'https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-Lana_Product_Photo_2_1_1000x1000.jpg?v=1645719839',
    description:
      'Add practical lighting and artful design to your workspace with Lana lamps. Both table and floor lamp styles bring you state-of-the-art technology and intuitive light control—complemented by a handcrafted wool felt shade for ultimate warmth. Get both versions of Lana to complete your space.',

    notes: '',
    numberInStock: 332,
    price: 44000,
  });

  await Product.create({
    name: 'UMA Mini Audio Lantern',
    slug: 'uma-mini-audio-lantern',
    category: 'lighting',
    imageURL:
      'https://cdn.shopify.com/s/files/1/0561/5304/7249/products/Uma_Product_Photo_2_4770888c-fa03-41d1-af3f-35dbe19f23e0_1000x1000.jpg?v=1645723256',
    description:
      'Ever wanted a lantern that’s a speaker and a modern beauty to behold? Us too. And that’s Uma. Warm LED light and high-quality sound go anywhere you do in a glowing, sleek design. Available in our mini size for easy portability. ',

    notes: '',
    numberInStock: 72,
    price: 29900,
  });
};

seedDB();
