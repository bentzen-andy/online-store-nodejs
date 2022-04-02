const { Pool } = require('pg');
const _ = require('lodash');

if (process.env.PRODUCTION) {
  const { credentials } = require('../.credentials');
  const { connectionString } = credentials.postgres;
} else {
  connectionString = process.env.CONNECTION_STRING;
}

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
