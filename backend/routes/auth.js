const { Router } = require('express');
const authCtrl = require('../controllers/auths');

const router = Router();

router.post('/login', authCtrl.login);

module.exports = router;
