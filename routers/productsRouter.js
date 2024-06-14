const express = require('express');
const productsRouter = express.Router();

productsRouter.get('/test', (req, res) => {
    res.json('products - test ok')
});

module.exports = productsRouter