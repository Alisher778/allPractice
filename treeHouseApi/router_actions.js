const Question = require('./model');

exports.index = (req, res) => {
    res.send({name: "hello man"})
};

exports.create = (req, res) => {
    console.log('body   ===== ===== ====',req.body)
    Question.create({question: req.body.question})
        .then(data => {
            console.log('Datae created', data)
            res.json(data);
        })
        .catch(err => res.json(err))    
};
