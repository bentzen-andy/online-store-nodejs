const { credentials } = require('../.credentials');
// console.log("credentials");
// console.log(credentials);

const { Client } = require('pg');
const { connectionString } = credentials.postgres;
const client = new Client({ connectionString });

const createProductSchema = `
  CREATE TABLE IF NOT EXISTS products (
    name varchar(200) NOT NULL,
    slug varchar(200) PRIMARY KEY,
    category varchar(50),
    sku varchar(20),
    image_url varchar(400),
    description text,
    price money,
    notes text,
    number_in_stock integer
  );
`;

const getProductCount = async (client) => {
  const { rows } = await client.query('SELECT COUNT(*) FROM products');
  return Number(rows[0].count);
};

const seedProducts = async (client) => {
  const sql = `
    INSERT INTO products(
      name,
      slug,
      category,
      sku,
      image_url,
      description,
      price,
      notes,
      number_in_stock
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
  `;
  await client.query(sql, [
    'Nintendo Switch',
    'nintendo-switch',
    'electronics',
    'EL0001',
    'https://image.shutterstock.com/image-photo/cheshire-england-august-7th-2018-260nw-1173580291.jpg',
    '2021 Newest Nintendo Switch OLED Model 64GB Gaming Console with White Joy-Con, 7 inch 1280 x 720 OLED Touchscreen Display, Built-in Speaker, WiFi, Bluetooth 4.1',
    519.0,
    '',
    26,
  ]);
  await client.query(sql, [
    'Xbox Series S',
    'xbox-series-s',
    'electronics',
    'EL0002',
    'https://m.media-amazon.com/images/I/71NBQ2a52CL._SL1500_.jpg',
    'Introducing the Xbox Series S, the smallest, sleekest Xbox console ever. Experience the speed and performance of a next-gen all-digital console at an accessible price point.',
    499.0,
    '',
    34,
  ]);
  await client.query(sql, [
    'Play-Station 4',
    'play-station-4',
    'electronics',
    'EL0003',
    'https://m.media-amazon.com/images/I/61XsKLeku-L._AC_SL1251_.jpg',
    'Play-Station 4 PS4 1TB Slim Edition Gaming Console with 1 Wireless Controller, Jet Black - 8-core x86-64 AMD Jaguar CPU, 1.84 TFLOPS AMD Radeon GPU, 8GB GDDR5 Memory, WiFi, Bluetooth',
    649.0,
    '',
    13,
  ]);
};

client.connect().then(async () => {
  try {
    console.log('creating database schema');
    await client.query(createProductSchema);
    const productCount = await getProductCount(client);
    if (productCount === 0) {
      console.log('seeding products');
      await seedProducts(client);
    }
  } catch (err) {
    console.log('ERROR: could not initialize database');
    console.log(err.message);
  } finally {
    client.end();
  }
});
