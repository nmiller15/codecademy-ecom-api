'use strict';


/**
 * Remove a user profile
 * Remove a user profile from the database of users.
 *
 * userId Integer A unique number belonging to each user.
 * no response value expected for this operation
 **/
exports.delete_user_id = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of all users
 * Retrieve a list of all users currently stored in the database.
 *
 * no response value expected for this operation
 **/
exports.get_user = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


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
 * Edit user
 * Update the contact information associated with a user account by matching id
 *
 * userId Integer A unique number belonging to each user.
 * no response value expected for this operation
 **/
exports.put_user_id = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

