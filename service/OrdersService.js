'use strict';


/**
 * Get all orders.
 * Retrieve a list of all orders in the database.
 *
 * no response value expected for this operation
 **/
exports.get_orders = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get single order
 * Retrieve a single order from the database with its status and list of products.
 *
 * orderNum Integer Number associated with the order.
 * no response value expected for this operation
 **/
exports.get_orders_id = function(orderNum) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add an order
 * Create an order from a list of products to be added to the database for tracking.
 *
 * no response value expected for this operation
 **/
exports.post_orders = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit existing order.
 * Make changes to the products on an order with status is not shipped.
 *
 * orderNum Integer Number associated with the order.
 * no response value expected for this operation
 **/
exports.put_orders_id = function(orderNum) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

