const jwt = require('jsonwebtoken');

const { TOKEN_KEY } = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.accessToken ||
    req.query.accessToken ||
    req.headers['x-access-token'];

  if (!token) {
    return res.status(403).json('A token is required for authentication');
  }
  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json('Invalid Token');
  }
  return next();
};

module.exports = verifyToken;
