const express = require('express');
const router = express.Router();
const routes = require('./router_actions');

router.get('/', routes.index);

router.route('/api')
    .get((req, res) => {
        res.json({method: "GET"})
    })
    .post((req, res) => {
        res.json({method: "POST"})
    })
    .delete((req, res) => {
        res.json({method: "DELETE"})
    })
    .put((req, res) => {
        res.json({method: "PUT"})
    })

module.exports = router;