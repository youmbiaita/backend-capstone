const { Router } = require('express');
const usersCtrl = require("../controllers/users.js")

const router = Router();

//Here we call all user functions

router.get('/', usersCtrl.getAllUsers);
router.post('/', usersCtrl.createUser);
router.get('/:id', usersCtrl.getUserById);
router.patch('/:id', usersCtrl.updateUserById);
router.delete('/:id', usersCtrl.deleteUserById);

module.exports = router;
