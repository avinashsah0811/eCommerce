import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
})

app.get('/api/products', (req, res) => {
    res.json(products);
    console.log('products loaded');
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
    console.log(`specific product with id: ${product._id} loaded`);
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}!`);
})