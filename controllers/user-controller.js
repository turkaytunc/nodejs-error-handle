const getUserById = (req, res, next) => {
  const id = req.params.id;
  const error = new Error('id is less than 4');
  error.statusCode = 400;
  if (id < 4) {
    return next(error);
  }
  return res.json({ id });
};

module.exports = getUserById;
