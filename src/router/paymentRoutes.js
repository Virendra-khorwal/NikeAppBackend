const express = require('express');
const router = express.Router();
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


router.post('/intents', async(req, res) => {

    try {

        // create a payment intnet
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            }
        })
        // return client secret
        res.json({client_secret: paymentIntent.client_secret})
    } catch (e) {
        res.status(400).json({
            error: e.message
        })
    }
})


module.exports = router;