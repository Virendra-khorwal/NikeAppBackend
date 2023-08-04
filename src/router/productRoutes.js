const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../database/products');


router.get('/', async(req, res) => {
    const products = await getAllProducts();
    res.send({status: 'OK', data: products});
})

router.get('/:productId', async(req, res) => {
    try {
        const product = await getProductById(req.params.productId);

        if (!product) {
            res.status(404).send({ status: "ERROR", error: 'Item not found' });
            return;
        }

        res.send({ status: "OK", data: product });
    } catch (error) {
        res.status(401).send({ status: "ERROR", error: error.message });
    }
    
})

module.exports = router;