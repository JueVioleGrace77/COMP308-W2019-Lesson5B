let express = require('express');
let router = express.Router();


let contactController = require('../controllers/contact');

/* GET Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

/*  Get Route for the Add page
    This will display the add pahe */
router.get('/add', contactController.displayAddPage);

/* POST Route for processing the add page*/
router.post('/add', contactController.processAddPage);

/* GET request - display the Edit page */
router.get('/edit/:id', contactController.displayEditPage);

/* POST request - update the database with data from the edit page  */
router.post('/edit/:id', contactController.processEditPage);

/* GET request to deletye */
router.get('/delete/:id', contactController.performDelete);
module.exports = router;