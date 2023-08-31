const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
    res.send("Hello NODE API")
})


router.post('/product', async(req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);

    } catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


router.get('/get-products', async(req, res) => {
    try{
        const products =  await Product.find({});
        res.status(200).json(products)

    }catch{
        res.status(500).json({message: error.message})
    }
})

router.get('/products/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)

    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//update the product
router.put('/products/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)
        if (!product){
            return res.status(404).json({message:`cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    }catch{
        res.status(500).json({message: error.message})
    }
})


//delete a product

router.delete('/products/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        if (!product){
            return res.status(404).json({message: `can not find any product with id ${id}`})
        }
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;
