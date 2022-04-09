exports.get404 = (req, res, next) => {
  console.log('exports.get404');
  const url = req.get('host') + req.originalUrl;
  console.log(url);
  res.json({ error: 'Data Not Found' });
};
