const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


const PORT = 3000;

// Middleware function 1
app.use((req, res, next) => {
    const start = Date.now();
    next();// This function calls the next middleware in the chain
    //Actions go here...
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());// Parses incoming JSON data and makes it available in req.body

app.get('/', (req, res) => {
    res.render('index', {
        title: "My Friends Are Clever",
        caption: "Let\'s go skiing!"
    });
});

app.use('/friends', friendsRouter);

app.use('/messages', messagesRouter);


// Start the server
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});