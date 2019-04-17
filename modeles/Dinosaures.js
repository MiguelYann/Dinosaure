var mongoose = require('mongoose');
var DinosaureSchema = new mongoose.Schema({
    age: Number,
    famille: String,
    Race: String,
    nourriture: String,

});

module.exports = mongoose.model('Dinosaures', DinosaureSchema);
