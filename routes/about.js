let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let contact = require('../models/contact');

/* GET Contact List page - READ Operation */
router.get('/', (req, res, next) =>{
    contact.find((err, programList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(programList);

            res.render('./index', {
                title: 'About',
                programList: programList
            });
            
        }
    });
});

module.exports = router;