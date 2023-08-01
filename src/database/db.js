
const {MongoClient} = require('mongodb');

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri)

const database = client.db('NikeData')
const products = database.collection('products')

module.exports = {
    products
}