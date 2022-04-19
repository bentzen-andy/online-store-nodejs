const jwt = require('jsonwebtoken');

const { TOKEN_KEY } = process.env;

const verifyToken = (req, res, next) => {
  console.log('verifyToken - middleware');
  console.log('req.body');
  console.log(req.body);

  const token =
    req.body.accessToken ||
    req.query.accessToken ||
    req.headers['x-access-token'];

  if (!token) {
    return res.status(403).json('A token is required for authentication');
  }
  try {
    // console.log('token');
    // console.log(token);
    // console.log('TOKEN_KEY');
    // console.log(TOKEN_KEY);
    const decoded = jwt.verify(token, TOKEN_KEY);
    // console.log('decoded');
    // console.log(decoded);
    req.user = decoded;
    // console.log('req.user');
    // console.log(req.user);
  } catch (err) {
    console.log('verifyToken - there was an error');
    return res.status(401).json('Invalid Token');
  }
  return next();
};

module.exports = verifyToken;
