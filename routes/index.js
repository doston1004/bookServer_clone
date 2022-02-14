const router = require(`express`).Router();

const userRouter = require(`./user.router`);
const bookRouter = require(`./book.router`);
const authorRouter = require(`./author.router`);

router.use(`/users`, userRouter);
router.use(`/books`, bookRouter);
router.use(`/auhtors`, authorRouter);

module.exports = router;

