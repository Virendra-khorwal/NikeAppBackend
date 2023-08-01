
const { ObjectId } = require('mongodb');
const db = require('./db')

const getAllProducts = async () => {
    const products = await db.products.find().toArray();
    return products;
}

const getProductById = async (id) => {
    const product = await db.products.findOne({_id: ObjectId(id)});
    return product;
}

module.exports = {
    getAllProducts,
    getProductById
}