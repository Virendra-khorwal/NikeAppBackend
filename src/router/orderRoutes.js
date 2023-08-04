
const express = require('express');
const router = express.Router();



router.get('/:reference', async(req, res) => {
    res.send(`Get order with reference ${req.params.reference}`);
})

router.post('/', async(req, res) => {
    res.send(`Create order`);
})

module.exports = router;