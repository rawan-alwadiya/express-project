const friendsModel = require('../models/friends.model');

function postFriend(req, res) {

    if(!req.body.name){
        return res.status(400).json({
            error: 'Missing the friend name'
        });
    }

    const newFriend = {
        id: friendsModel.length,
        name: req.body.name
    };
    friendsModel.push(newFriend);

    res.json(newFriend);
}

function getFriends(req, res) {
    res.send(friendsModel);
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = friendsModel[friendId];
    if(friend){
        res.status(200).json(friend);
    }else {
        res.status(404).json({
            error: 'Friend does not exist'
        });
        console.log(friendsModel);
    }
}

module.exports = {
    postFriend,
    getFriends,
    getFriend
};