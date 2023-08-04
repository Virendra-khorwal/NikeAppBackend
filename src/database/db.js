
const {MongoClient} = require('mongodb');

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri)

const database = client.db('Nikedata')
const products = database.collection('products')

module.exports = {
    products
}