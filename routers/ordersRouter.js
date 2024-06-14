const express = require('express');
const ordersRouter = express.Router();

ordersRouter.get('/test', (req, res) => {
    res.json('orders - test ok');
});

module.exports = ordersRouter;