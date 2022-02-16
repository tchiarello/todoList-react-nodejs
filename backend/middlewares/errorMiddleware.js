module.exports = (err, _req, res, _next) => {
  if (err) {
    return res.status(err.status).json({ message: err.message });
  }

  console.error(err);
  return res.status(500).json({ message: 'Internal Server Error' });
};
