const express = require('express');
const productsRouter = express.Router();
const db = require('../database/db');

productsRouter.get('/test', (req, res) => {
    res.json('products - test ok')
});

const type = 'products';

productsRouter.get('/', async (req, res) => {
    const response = await db.getAllInstances(type);
    if (!response) return res.status(500).send('Could not access product list.')
    const products = response.rows;
    res.json({ products });
})

module.exports = productsRouter