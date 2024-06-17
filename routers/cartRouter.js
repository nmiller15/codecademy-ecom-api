const express = require('express');
const cartRouter = express.Router();
const userAuth = require('../util/userAuth');
const db = require('../database/db');

// Mounting check id middleware
cartRouter.use('/:id', userAuth.checkUserId );

const type = 'carts';

cartRouter.get('/test', (req, res) => {
    res.json('cart - test ok');
});

// Get the contents of a cart using the user id
cartRouter.get('/:id', async (req, res) => {
    if (!req.session.isAuthenticated) return res.status(400).json("You must be logged in to view a cart.");
    const id = req.params.id;
    const response = await db.getInstanceById(type, id);
    if (!response) return res.status(400).json('Unable to retrieve record from database.');
    console.log(response);
    res.status(200).send(response);
})

module.exports = cartRouter;