'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.delete_user_id_cart = function delete_user_id_cart (req, res, next, userId) {
  Cart.delete_user_id_cart(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_user_id_cart = function get_user_id_cart (req, res, next, userId) {
  Cart.get_user_id_cart(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post_user_id_cart = function post_user_id_cart (req, res, next, userId) {
  Cart.post_user_id_cart(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
