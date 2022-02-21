const Author = require(`../models/author.model`);

const authorCtrl = {
  getAuthors: async (req, res) => {
    try {
      const authors = await Author.find();

      res.json({ authors });
    } catch (err) {
      res.status(500).json({ message: `Internal server error` });
    }
  },
  createAuthor: async (req, res) => {
    try {
      const { name } = req.body;

      const author = await Author.create({ name });

      res.json({ message: `Created author`, author });
    } catch (err) {
      res.status(500).json({ message: `Internal server error` });
    }
  },
  updateAuthor: async (req, res) => {
    try {
      const id = await Author.findByIdAndUpdate(req.params.id);

      res.json({ message: `Updated author`, authorId: id });
    } catch (err) {
      res.status(500).json({ message: `Internal server error` });
    }
  },
  deleteAuthor: async (req, res) => {
    try {
      const deletedAuthor = await Author.findByIdAndRemove(req.params.id);
      res.json({ message: `Deleted author` });
    } catch (err) {
      res.status(500).json({ message: `Internal server error` });
    }
  },
};

module.exports = authorCtrl;
