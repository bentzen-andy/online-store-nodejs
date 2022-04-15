const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Cart = require('../models/Cart');
const { validateEmail } = require('../util/validateEmail');

exports.postLogin = async (req, res, next) => {
  try {
    // get user input
    let { email, password } = req.body.user;

    email = email.toLowerCase();

    // Validate user input
    if (!(email && password)) {
      return res.status(400).json({ error: 'All input is required.' });
    }

    // validation for email address
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Not a valid email.' });
    }

    // confirm that the user exists in the database
    const user = await User.findOne({ email });

    // confirm password matches the password in the database
    const passwordsMatch =
      user && (await bcrypt.compare(password, user.password));

    if (!passwordsMatch) {
      return res
        .status(400)
        .json({ error: 'Email or password does not match.' });
    }

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '24h',
      }
    );

    return res.status(200).json({ status: 'LOGGED_IN', token });
  } catch (err) {
    console.log(err);
  }
};

exports.postCheckUsername = async (req, res, next) => {
  if (req.user) {
    console.log(' postCheckUsername - req.user');
    console.log(req.user);
    const email = req.user.email;
    const userID = req.user.user_id;
    const cart = await Cart.findOne({ owner: userID });
    let products = null;
    if (cart) products = cart.products;
    return res
      .status(200)
      .json({ status: 'LOGGED_IN', userID, email, products });
  }
};
