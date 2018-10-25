"use strict";

const express = require('express');
const methodOverride = require('method-override');
const app = express();
const jsonParser = require('body-parser').json;
const morgan = require('morgan')
const port = process.env.PORT || 3000;
const routes = require('./router');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/demo-api");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error'));
db.once('open', () => console.log('DB is connected'));

// Middleware
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.use(jsonParser());
app.use(morgan('tiny'));
app.use('/questions', routes);

// 404 pages
app.use((req, res, next) => {
    const err = new Error('Not Fount');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({error: {message: err.message}});
})

app.get('/', (req, res) => {
    res.send({name: 'Alisher'})
});

app.delete('/', (req, res) => {
    res.send({method: 'Delete'})
})
app.put('/', (req, res) => {
    res.send({method: 'Put'})
})
app.listen(port, () => {
    console.log('App is running on port '+port);
});
