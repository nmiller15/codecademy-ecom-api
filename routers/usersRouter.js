const express = require('express');
const usersRouter = express.Router();
const db = require('../database/db.js');
const multer = require('multer');
const upload = multer();
const dateCreated = require('../middleware/dateCreated');


const type = 'users';

usersRouter.get('/test', (req, res)=> {
    res.json('users - test ok');
})

usersRouter.post('/register', upload.none(), dateCreated, async (req, res) => {
    const model = req.body;
    model.date_created = req.dateCreated;
    
    // Unique username in development
    if (process.env.NODE_ENV == "development") model.username = Math.floor(Math.random()*100000)

    const added = await db.addInstance(type, model);
    if (!added ) return res.status(501).json('Not added to the database');
    res.status(201).json(model);
})

module.exports = usersRouter;