const express = require('express');

const productRoutes = require('./router/productRoutes');
const orderRoutes = require('./router/orderRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
})
