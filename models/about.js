let mongoose = require('mongoose');

// create a model class
let favoriteSchema = mongoose.Schema({
    name: String,
    description: String,
},
{
    collection: "favorite-things"
});

module.exports = mongoose.model('favorite-things', favoriteSchema);