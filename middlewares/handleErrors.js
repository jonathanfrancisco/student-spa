module.exports = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send(err.message)
  } else {
    console.log(err)
    res.status(500).send({ message: 'Internal server error' })
  }
}
