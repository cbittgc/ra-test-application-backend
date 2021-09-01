const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const History = require('./src/controllers/HistoryController');
const Bookmark = require('./src/controllers/BookmarkController');

const app = express()

mongoose.connect(
    "mongodb+srv://admin:9WPsnENBJy7UZvYy@cluster0.jexja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  ).then(() => {
    console.log("Connected to database!");
  }).catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
    )
    next()
})

app.post('/api/history', History.store);

app.get('/api/history', History.index);

app.patch('/api/bookmark/:_id', Bookmark.store);

app.get('/api/bookmark', Bookmark.index);
/*
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/
module.exports = app