const Author = require(`../models/author.model`);

const authorCtrl = {
  getAuthors: async (req, res) => {
    try {
      const authors = await Author.find();

      res.json({ authors: authors });
    } catch (err) {
      res.status(500).json({ message: `Internal server error` });
    }
  },
  getAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id);
      if (!author) {
        return res.status(400).json({ message: "Bunday id topilmadi" });
      }
      res.json(author);
    } catch (err) {
      res.status(500).json({ message: `Internal server error` });
    }
  },
  createAuthor: async (req, res) => {
    try {
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const age = req.body.age;

      const userInformation = {
        firstName: firstName,
        lastName: lastName,
        age: age,
      };

      const author = await Author.create(userInformation);

      res.json({ message: `Created author`, author });
    } catch (err) {
      res.status(500).json({ message: `Internal server error` });
    }
  },
  updateAuthor: async (req, res) => {
    try {
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const age = req.body.age;

      const authorUpdateInfo = {
        firstName: firstName,
        lastName: lastName,
        age: age,
      };

      const author = await Author.updateOne(
        { _id: req.params.id },
        authorUpdateInfo
      );
      if (author.matchedCount === 0)
        return res.status(400).json({ message: "Notogri id kiritgansan" });

      res.json({ message: `Updated author` });
    } catch (err) {
      res.status(500).json({ message: `Internal server error` });
    }
  },
  deleteAuthor: async (req, res) => {
    try {
      const author = await Author.findByIdAndDelete(req.params.id);
      if (!author)
        return res.status(400).json({ message: "Notogri id kiritgansan" });

      res.json({ message: `Deleted author` });
    } catch (err) {
      res.status(500).json({ message: `Internal server error` });
    }
  },
};

module.exports = authorCtrl;
