const mongoose = require(`mongoose`);

const authorSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model(`author`, authorSchema);
