
const {MongoClient} = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri)

const database = client.db('Nikedata')
const products = database.collection('products')
const orders = database.collection('orders')

module.exports = {
    products,
    orders,
}