const express = require('express');
const ordersRouter = express.Router();
const userAuth = require('../util/userAuth');
const dateCreated = require('../util/dateCreated');
const db = require('../database/db');

ordersRouter.get('/test', (req, res) => {
    res.json('orders - test ok');
});

const type = 'orders';

// Get a list of all orders with an identifying username and address information
// Admin only
ordersRouter.get('/', userAuth.isAdmin, async (req, res) => {
    const response = await db.getAllInstances(type);
    if (!response) return res.status(500).json('Could not get orders from database.');
    const orders = response.rows;
    res.status(200).json(orders);
})


// Get a list of all orders that are your own


// Add an order for the current user
ordersRouter.post('/', userAuth.isAuthenticated, dateCreated, async (req, res) => {
    try {
        // Create an order
        const orderModel = {
            user_id: req.session.user.id,
            date_created: req.dateCreated,
            status: 'Order Submitted'
        }
        const response = await db.addInstance(type, orderModel);
        if (!response) return res.status(500).json("Order could not be created.");
        const order = response.rows[0];
    
        // Add a products_orders listing from an array of product_ids
        const productsString = req.body.products;
        const products = productsString.split(', ');
        products.forEach( async (product) => {
            const model = {
                product_id: product,
                order_number: order.number
            }
            const productOrderListing = await db.addInstance('products_orders', model);
            if (!productOrderListing) return res.status(500).json("Order could not be created.");
        })

        res.status(200).json(order);

    } catch (err) {
        return res.status(400).json(err.message);
    }
})


// Get one order by id -- must be your own or be an admin


// Edit an order -- must be your own or be an admin


// Delete an order -- check that status is cancelled, order is own or is admin




module.exports = ordersRouter;