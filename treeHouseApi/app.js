"use strict";

const express = require('express');
const methodOverride = require('method-override');
const app = express();
const jsonParser = require('body-parser').json;
const morgan = require('morgan')
const port = process.env.PORT || 3000;
const routes = require('./router');


// Middleware
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.use(jsonParser());
app.use(morgan('tiny'));
app.use('/questions', routes);

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
