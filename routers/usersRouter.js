const express = require('express');
const usersRouter = express.Router();
const db = require('../database/db.js');
const multer = require('multer');
const upload = multer();
const dateCreated = require('../middleware/dateCreated');
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

const comparePassword = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const hashPassword = await db.getPassword(username);

    const matches = await bcrypt.compareSync(password, hashPassword);


}


const type = 'users';

usersRouter.get('/test', (req, res)=> {
    res.json('users - test ok');
})

// ! ADD SALT AND HASH FOR PASSWORD!!!
usersRouter.post('/register', upload.none(), dateCreated, hashPassword, async (req, res) => {
    const model = req.body;
    model.date_created = req.dateCreated;
    
    // Unique username in development
    if (process.env.NODE_ENV == "development") model.username = Math.floor(Math.random()*1000000)

    const added = await db.addInstance(type, model);
    if (!added ) return res.status(501).json('Not added to the database');
    res.status(201).json(model);
})

module.exports = usersRouter;