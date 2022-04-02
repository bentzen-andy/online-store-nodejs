exports.get404 = (req, res, next) => {
  res.json({ error: "Data Not Found" });
};
