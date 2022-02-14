const mongoose = require(`mongoose`);

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  // author: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // price: {
  //   type: Number,
  //   required: true,
  //   trim: true,
  // },
  // rating: {
  //   type: String, Number,
  //   required: true,
  //   trim: true,    
  // }
});

module.exports = mongoose.model(`book`, bookSchema);
