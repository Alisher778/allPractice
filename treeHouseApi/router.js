const express = require('express');
const router = express.Router();
const routes = require('./router_actions');
const Question = require('./model');

router.get('/', routes.index);

router.route('/api')
    .get((req, res) => {
        res.json({name: "Alisher"})
    })
    .post(routes.create)
    .delete((req, res) => {
        res.json({method: "DELETE"})
    })
    .put((req, res) => {
        console.log(req.params)
        res.json({method: "PUT"})
    })

module.exports = router;