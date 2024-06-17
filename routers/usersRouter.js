const express = require('express');
const usersRouter = express.Router();
const db = require('../database/db.js');
const multer = require('multer');
const upload = multer();
const dateCreated = require('../util/dateCreated');
const userAuth = require('../util/userAuth.js');


const type = 'users';

usersRouter.get('/test', (req, res)=> {
    res.json('users - test ok');
})


// Register and new user and add to the database
usersRouter.post('/register', upload.none(), dateCreated, userAuth.hashPassword, async (req, res) => {
    const model = req.body;
    model.date_created = req.dateCreated;
    
    // Unique username in development
    if (process.env.NODE_ENV == "development") model.username = Math.floor(Math.random()*1000000)

    const added = await db.addInstance(type, model);
    if (!added ) return res.status(501).json('Not added to the database');
    res.status(201).json(model);
})

// Login a new user, send the user object in the response
usersRouter.post('/login', upload.none(), userAuth.authorize, async (req, res) => {
    const user = req.session.user
    res.status(200).json(user);
})

// Get all users -- admin only
usersRouter.get('/', async (req, res) => {
    if (!req.session.user.isadmin) return res.status(401).json({ "msg": "You are unauthorized to view this information."});
    const response = await db.getAllInstances(type); 
    if(!response) return res.status(500).json('Issue retrieving records');
    res.status(200).json(response.rows);
})

// Get single user by id
usersRouter.get('/:id', async (req, res) => {
    if(!req.session.isAuthenticated) return res.status(401).json({"msg": "You must be logged in to view a profile."});
    const id = req.params.id;
    const sessionUserId = req.session.user.id;
    if (sessionUserId != id && !req.session.user.isadmin) return res.status(401).json({"msg": "You can only view your own account."})
    const response = await db.getInstanceById(type, id);
    if (!response) return res.status(500).json('Issue retrieveing records');
    res.status(200).json(response);
})

module.exports = usersRouter;