const mongoose = require(`mongoose`);

const authorSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(`Author`, authorSchema);
