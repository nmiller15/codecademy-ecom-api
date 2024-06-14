const express = require('express');
const usersRouter = express.Router();

usersRouter.get(('/test'), (req, res)=> {
    res.json('users - test ok');
})

module.exports = usersRouter;