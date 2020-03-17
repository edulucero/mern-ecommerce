const express = require('express');
const router = express.Router();

const { create, categoryById, read, readAll, update, remove } = require('../controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

// C
router.post('/category/create/:userId', requireSignin, isAdmin, isAuth, create);
// R
router.get('/category/:categoryId', read);
router.get('/category/:categoryId', readAll);
// U
router.post('/category/create/:userId', requireSignin, isAdmin, isAuth, update);
// D
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);

// URL paramters
router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;