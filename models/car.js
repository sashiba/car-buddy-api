const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  // maintenance: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'maintenance'
  // }
});

const Car = mongoose.model('car', carSchema);
module.exports = Car;
