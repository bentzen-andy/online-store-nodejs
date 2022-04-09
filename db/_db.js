const { Pool } = require('pg');
const _ = require('lodash');

let connectionString = '';
if (process.env.PRODUCTION) {
  connectionString = process.env.CONNECTION_STRING;
} else {
  connectionString =
    require('../.credentials').credentials.postgres.connectionString;
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

  saveUser: async (email, password_hash) => {
    const createUserSchema = `
      CREATE TABLE IF NOT EXISTS users (
        email varchar(200) NOT NULL, PRIMARY KEY
        password_hash varchar(200)
        first_name varchar(100),
        last_name varchar(100),
        address_street varchar(100),
        address_city varchar(50),
        address_state varchar(50),
        address_zip varchar(50),
        credit_card_number varchar(50),
        credit_card_exp varchar(50),
        credit_card_cvv varchar(50),
      );
    `;

    const addUserToDB = async (client) => {
      const sql = `
      INSERT INTO users(
        email,
        password_hash,
        first_name,
        last_name,
        address_street,
        address_city,
        address_state,
        address_zip,
        credit_card_number,
        credit_card_exp,
        credit_card_cvv,

      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `;
      const values = [email, password_hash, '', '', '', '', '', '', '', '', ''];

      await client.query(sql, values);
    };

    const client = await pool.connect();
    client.connect().then(async () => {
      try {
        console.log('creating database schema');
        await client.query(createUserSchema);
        await addUserToDB(client);
      } catch (err) {
        console.log('ERROR: could not add user to database');
        console.log(err.message);
      } finally {
        client.release(true);
      }
    });
  },

  findUserByEmail: async (email) => {
    const sql = `
      SELECT * FROM users WHERE ${email} = email;
    `;

    // const client = await pool.connect();
    // client.connect().then(async () => {
    try {
      console.log('searching for user by email address');
      const { rows } = await pool.query(sql);
      return rows.map((row) => {
        const user = _.mapKeys(row, (v, k) => _.camelCase(k));
        return user;
      });
    } catch (err) {
      console.log('ERROR: something went wrong when looking up the user');
      console.log(err.message);
    }
  },
};
