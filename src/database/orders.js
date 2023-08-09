
const db = require('./db');

const getOrder = async (ref) => {
    const order = await db.orders.findOne({ref});
    return order;
}

const createOrder = async (order) => {
    const newOrder = await db.orders.insertOne(order);
    return { ...order, _id: newOrder.insertedId};
}

module.exports = {
    getOrder,
    createOrder
}