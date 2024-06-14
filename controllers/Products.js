'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.delete_products_id = function delete_products_id (req, res, next, productId) {
  Products.delete_products_id(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_products = function get_products (req, res, next) {
  Products.get_products()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_products_id = function get_products_id (req, res, next, productId) {
  Products.get_products_id(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.products_post = function products_post (req, res, next) {
  Products.products_post()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.put_products_id = function put_products_id (req, res, next, productId) {
  Products.put_products_id(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
