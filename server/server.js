const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postRouter = require('./routes/post.router.js')
const port = process.env.PORT || 5000;
require("dotenv").config();

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/post', postRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
