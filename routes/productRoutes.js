const router = require('express').Router();
const Product = require('../models/productModel')
const {createProduct, getProducts, getProduct, updateProduct, deleteProduct} = require('../controllers/productController')




router.post('/', createProduct)

router.get('/get-products', getProducts)

router.get('/:id', getProduct)

//update the product
router.put('/:id', updateProduct)


//delete a product

router.delete('/:id', deleteProduct)

module.exports = router;
