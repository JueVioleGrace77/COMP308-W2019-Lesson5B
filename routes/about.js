let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let contact = require('../models/about');

/* GET Contact List page - READ Operation */
router.get('/', (req, res, next) =>{
    contact.find((err, favoriteList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(contactList);

            res.render('abouts/index', {
                title: 'Favorite List',
                favoriteList: favoriteList
            });
            
        }
    });
});

module.exports = router;