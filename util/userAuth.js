const db = require('../database/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Password Hashing and Comparison
const hashPassword = async (req, res, next) => {
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        if(err) console.error(err);
        req.body.password = hash;
        next(); 
    })
}

// Authenticate users who's passwords match the database record
const authorize = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    const response = await db.getPassword(username);
    const hashPassword = response.password;
    const userId = response.id;


    const matches = await bcrypt.compare(password, hashPassword);
    if (matches) {
        req.session.isAuthenticated = true;
        const user = await db.getInstanceById('users', userId);
        req.session.user = user;
    } else {
        res.status(401).json({ "msg": "Incorrect Password" })
    }
    next();
}

// Verify the user is either accessing their own information, or the user is an admin
const checkUserId = async (req, res, next) => {
    if(!req.session.isAuthenticated) return res.status(401).json({"msg": "You must be logged in to view/edit a profile."});
    const id = req.params.id;
    const sessionUserId = req.session.user.id;
    if (sessionUserId != id && !req.session.user.isadmin) return res.status(401).json({"msg": "You can only view/edit your own account."})
    next();
}

module.exports = {
    hashPassword,
    authorize,
    checkUserId
}