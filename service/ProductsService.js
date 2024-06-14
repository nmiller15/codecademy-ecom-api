'use strict';


/**
 * Remove a product.
 * Revote a product from the database by matching an id.
 *
 * productId String Product code identifier.
 * no response value expected for this operation
 **/
exports.delete_products_id = function(productId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of all products
 * Retrieve a list of all the products currently in the database.
 *
 * no response value expected for this operation
 **/
exports.get_products = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a single product
 * Retrieve a single product by a matching id.
 *
 * productId String Product code identifier.
 * no response value expected for this operation
 **/
exports.get_products_id = function(productId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a product
 * Submit all product information in an object to be added to the database.
 *
 * no response value expected for this operation
 **/
exports.products_post = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit a product
 * Edit the data of a product retrieved through a matching id.
 *
 * productId String Product code identifier.
 * no response value expected for this operation
 **/
exports.put_products_id = function(productId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

