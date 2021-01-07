const { model, Schema } = require('mongoose')

module.exports = model(
  'Blogpost',
  new Schema({
    title: String,
    body: String,
  }),
)
