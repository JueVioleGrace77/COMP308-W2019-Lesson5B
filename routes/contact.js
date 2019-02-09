let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let contactModel = require('../models/contact');

/* GET Contact List page - READ Operation */
router.get('/', (req, res, next) =>{
    contactModel.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(contactList);

            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });
            
        }
    });
});

/*  Get Route for the Add page
    This will display the add pahe */
router.get('/add', (req,res,next) => {
    res.render('contacts/add', {
        title: 'Add New Contact',
    });
});

/* POST Route for processing the add page*/
router.post('/add', (req,res,next) => {

    let newContact = contactModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age
    });

    contactModel.create(newContact, (err, contactModel) =>{
        if(err){
            console.log(err);
            res.end(err);
        } else{
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });

});

/* GET request - display the Edit page */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    contactModel.findById(id, (err, contactObject) =>{
        if(err){
            console.log(err);
            res.end(err);
        } else {
            //show the edit view
            res.render('contacts/edit', {
                title: 'Edit Contact',
                contact: contactObject
            });
        }
    });
});

/* POST request - update the database with data from the edit page  */
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedContact = contactModel({
        "_id": id,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age
    });

    contactModel.update({_id: id}, updatedContact, (err) => {
        if(err){
            console.log(err),
            res.end(err);
        } else {
            //refresh the contactList
            res.redirect('/contact-list');
        }
    });
});

/* GET request to deletye */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) =>{
        if(err){
            console.log(err),
            res.end(err);
        } else{
             //refresh the contactList
             res.redirect('/contact-list');
        }
    })
});
module.exports = router;