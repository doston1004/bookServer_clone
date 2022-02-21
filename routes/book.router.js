const router = require(`express`).Router();

const bookCtrl = require(`../controllers/book.controller`);

router.get(`/`, bookCtrl.getBooks);

router.get(`/:id`, bookCtrl.getBook)

router.post(`/`, bookCtrl.createBook);

router.put(`/:id`, bookCtrl.updateBook);

router.delete(`/:id`, bookCtrl.deleteBook);

module.exports = router;
