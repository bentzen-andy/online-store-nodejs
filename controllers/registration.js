const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validateEmail } = require('../util/validateEmail');

exports.postUser = async (req, res, next) => {
  try {
    // get user input
    let { email, password, passwordConfirmation } = req.body.user;

    email = email.toLowerCase();

    // Validate user input
    if (!(email && password && passwordConfirmation)) {
      return res.status(400).json({ error: 'All input is required.' });
    }

    // validation for email address
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Not a valid email.' });
    }

    // validate that passwords match
    if (password !== passwordConfirmation) {
      return res.status(400).json({ error: 'Passwords do not match.' });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: 'User already exists.' });
    }

    // generate salt to hash the password
    const salt = await bcrypt.genSalt(10);

    // hash the password
    passwordHash = await bcrypt.hash(password, salt);

    // create user in the database
    const user = await User.create({
      email: email,
      password: passwordHash,
    });

    // create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '24h',
      }
    );

    // return new user
    res.status(201).json({ status: 'created', token });
  } catch (err) {
    console.log(err);
  }
};
