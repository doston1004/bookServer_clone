const User = require(`../models/user.model`);
const authorCtrl = require("./author.controller");

const userCtrl = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json({ users });
    } catch (err) {
      res.status(500).json({ message: `Internal server error...` });
    }
  },
  createUser: async (req, res) => {
    try {
      const { username } = req.body;
      const user = await User.create({ userName });
      res.json({ message: `Created user`, user });
    } catch (err) {
      res.status(500).json({ message: `Internal server error...` });
    }
  },
  updateUser: async (req, res) => {
    try {
      const id = await User.findByIdAndUpdate(req.params.id);
      res.json({ message: `Updated user` });
    } catch (err) {
      res.status(500).json({ message: `Internal server error...` });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndRemove(req.params.id);
      res.json({ message: `Deleted user` });
    } catch (err) {
      res.status(500).json({ message: `Internal server error` });
    }
  },
};

module.exports = userCtrl;
