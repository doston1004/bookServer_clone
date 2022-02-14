const router = require(`express`).Router();

const userCtrl = require(`../controllers/user.controller`);

router.get(`/`, userCtrl.getUsers);

router.post(`/`, userCtrl.createUser)

router.put(`/:id`, userCtrl.updateUser)

router.delete(`/:id`, userCtrl.deleteUser)

// router.get(`/`, (req, res) => {
//   res.send(`User api`);
// });

module.exports = router;
