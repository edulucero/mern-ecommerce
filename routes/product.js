const express = require('express');
const router = express.Router();

const { 
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo
} = require('../controllers/product');

const {
    requireSignin,
    isAuth,
    isAdmin
} = require('../controllers/auth')

const { 
    userById
} = require('../controllers/user')

// Product Managment
router.get('/product/:productId', read, remove);
router.post('/product/create/:userId', requireSignin, isAdmin, isAuth, create);
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove);
router.put('/product/:productId/:userId', requireSignin, isAuth, isAdmin, update);

// Returning Products
router.get('/products', list);
router.get('/products/related/:productId', listRelated);
router.get('/products/categories', listCategories);
router.post('/products/by/search', listBySearch);
router.get('product/photo/:productId', photo);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;