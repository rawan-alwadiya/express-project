const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to my friends!',
        friend: 'Elon Musk'
    });
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'ski.jpg'));
    // res.json('<ul><li>Hello Albert!</li></ul>');
}

function postMessage(req, res) {
    res.send('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage
};