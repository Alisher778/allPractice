const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema ({
    question: String,
    createdAt: {type: String, default: Date.now()}
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;