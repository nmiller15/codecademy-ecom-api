const express = require('express');
const cartRouter = express.Router();

cartRouter.get('/test', (req, res) => {
    res.json('cart - test ok');
});

module.exports = cartRouter;