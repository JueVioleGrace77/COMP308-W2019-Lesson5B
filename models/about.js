let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    software: String,
    programmingLanguage: String,
},
{
    collection: "first"
});

module.exports = mongoose.model('test', contactSchema);