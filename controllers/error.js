exports.get404 = (req, res, next) => {
  const url = req.get('host') + req.originalUrl;
  res.json({ error: 'Data Not Found' });
};
