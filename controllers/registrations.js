const bcrypt = require('bcrypt');
const crypto = require('crypto');
const User = require('../models/User');
const { validateEmail } = require('../util/validateEmail');

exports.postUser = async (req, res, next) => {
  console.log('exports.postUser');
  const email = req.body.user.email;
  const password = req.body.user.password;
  const passwordConfirmation = req.body.user.passwordConfirmation;

  // validation for email address
  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Not a valid email.' });
  }

  // validate that passwords match
  if (password !== passwordConfirmation) {
    return res.status(400).json({ error: 'Passwords do not match.' });
  }

  // check if email already belongs to existing user
  const existingUser = await User.findByEmail(email);
  if (existingUser) {
    console.log(existingUser);
    return res.status(409).json('Email address is already taken.');
  }

  // generate salt to hash password
  const salt = await bcrypt.genSalt(10);

  // hash the password
  password_hash = await bcrypt.hash(password, salt);

  const user = new User(email, password_hash);
  await user.save();

  // let nonce = crypto.randomBytes(16).toString('base64');
  // console.log('nonce');
  // console.log(nonce);

  // req.session[nonce] = 'user';
  // req.cookie('_atb-online-store', nonce);
  return res.status(201).json({ status: 'created' });
};
