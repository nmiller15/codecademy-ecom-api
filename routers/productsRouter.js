const express = require('express');
const productsRouter = express.Router();
const db = require('../database/db');

productsRouter.get('/test', (req, res) => {
    res.json('products - test ok')
});

const type = 'products';

const getProductMiddleware = async (req, res, next) => {
    const id = req.params.id;
    const response = await db.getInstanceById(type, id);
    if (!response) return res.status(500).send('Could not communicate with the database.');
    req.product = response;
    next();
}

productsRouter.get('/', async (req, res) => {
    const response = await db.getAllInstances(type);
    if (!response) return res.status(500).send('Could not access product list.')
    const products = response.rows;
    res.json(products);
})

productsRouter.use('/:id', getProductMiddleware)

productsRouter.get('/:id', async (req, res) => {
    const product = req.product
    res.json(product);
})

module.exports = productsRouter