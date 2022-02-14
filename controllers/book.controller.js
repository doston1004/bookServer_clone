const Book = require(`../models/book.model`);

const bookCtrl = {
  getBooks: async (req, res) => {
    try {
      const books = await Book.find();

      res.json({ books });
    } catch (err) {
      res.status(500).json({ message: `Internal server error` });
    }
  },
  createBook: async (req, res) => {
    try {
      const { title } = req.body;

      const book = await Book.create({ title });

      res.json({ message: `Created book`, book });
    } catch (err) {
      res.status(500).json({ message: `Internal server error...` });
    }
  },
  updateBook: async (req, res) => {
    try {
      const id = req.params.id;

      res.json({ message: `Updated book...` });
    } catch (err) {
      res.status(500).json({ message: `Internal server error...` });
    }
  },
  deleteBook: async (req, res) => {
    try {
      res.json({ message: `Deleted book` });
    } catch (err) {
      res.status(500).json({ message: `Internal server error` });
    }
  },
};

module.exports = bookCtrl;
