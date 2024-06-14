'use strict';


/**
 * Get a single user profile
 * Retrieve the profile information for a user using a matching id.
 *
 * userId Integer A unique number belonging to each user.
 * no response value expected for this operation
 **/
exports.get_user_id = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Login to a user account
 * Send username and password to receive a token that validates login status.
 *
 * no response value expected for this operation
 **/
exports.login = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Log out of user profile
 * Invalidate the token used to verify user session by sending username.
 *
 * no response value expected for this operation
 **/
exports.logout = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a new user.
 * Send all user information and a new user will be created in the database with a login session validated.
 *
 * no response value expected for this operation
 **/
exports.register = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

