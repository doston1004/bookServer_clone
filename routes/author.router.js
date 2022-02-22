const router = require(`express`).Router();

const authorCtrl = require(`../controllers/author.controller`);

router.get(`/`, authorCtrl.getAuthors);

router.get(`/:id`, authorCtrl.getAuthor);

router.post(`/`, authorCtrl.createAuthor);

router.put(`/:id`, authorCtrl.updateAuthor);

router.delete(`/:id`, authorCtrl.deleteAuthor);

module.exports = router;
