'use strict';

var utils = require('../utils/writer.js');
var Orders = require('../service/OrdersService');

module.exports.get_orders = function get_orders (req, res, next) {
  Orders.get_orders()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_orders_id = function get_orders_id (req, res, next, orderNum) {
  Orders.get_orders_id(orderNum)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post_orders = function post_orders (req, res, next) {
  Orders.post_orders()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.put_orders_id = function put_orders_id (req, res, next, orderNum) {
  Orders.put_orders_id(orderNum)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
