const { Router } = require('express');
const menusCtrl = require('../controllers/menus.js');

const router = Router();

//Here we call all menu functions

router.get('/', menusCtrl.getAllMenus)
router.post('/', menusCtrl.createMenu);
router.get('/:id', menusCtrl.getMenuById);
router.patch('/:id', menusCtrl.updateMenuById);
router.delete('/:id', menusCtrl.deleteMenuById)

module.exports = router;