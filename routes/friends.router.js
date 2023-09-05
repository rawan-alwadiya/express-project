const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    // console.log(`ip adress: ${req.ip}`);
    next();
});
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
// GET /friends/22
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;