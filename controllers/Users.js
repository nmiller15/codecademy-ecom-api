'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.delete_user_id = function delete_user_id (req, res, next, userId) {
  Users.delete_user_id(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_user = function get_user (req, res, next) {
  Users.get_user()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_user_id = function get_user_id (req, res, next, userId) {
  Users.get_user_id(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.put_user_id = function put_user_id (req, res, next, userId) {
  Users.put_user_id(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
