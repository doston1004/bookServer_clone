const router = require(`express`).Router();

const authorCtrl = require(`../controllers/author.controller`);

router.get(`/`, authorCtrl.getAuthors);

router.post(`/`, authorCtrl.createAuthor);

router.put(`/:id`, authorCtrl.updateAuthor);

router.delete(`/:id`, authorCtrl.deleteAuthor);

module.exports = router;

// router.get(`/`, (req, res) => {
//   res.send(`Author API`);
// });
