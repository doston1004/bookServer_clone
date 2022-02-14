const mongoose = require(`mongoose`);

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model(`user`, userSchema);
