
const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  name: String,
  price: Number,
  color: String,
  size: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

module.exports = mongoose.model('Shoe', shoeSchema);

