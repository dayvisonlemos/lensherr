function errorHandler(err, res) {
  return res.status(err.status).json({ error: err.message });
}

module.exports = {
  errorHandler,
};
