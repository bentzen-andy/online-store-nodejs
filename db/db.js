const { Pool } = require('pg');
const _ = require('lodash');

let connectionString = '';
if (process.env.PRODUCTION) {
  connectionString = process.env.CONNECTION_STRING;
} else {
  connectionString =
    require('../.credentials').credentials.postgres.connectionString;
}

console.log('connectionString');
console.log(connectionString);

const pool = new Pool({ connectionString });

module.exports = {
  getProducts: async () => {
    const { rows } = await pool.query('SELECT * FROM products');
    return rows.map((row) => {
      const products = _.mapKeys(row, (v, k) => _.camelCase(k));
      products.price = parseFloat(products.price.replace(/^\$/, ''));
      return products;
    });
  },
};
