const Router = require('express').Router;


const controller = require('../controllers/admin');
// Initiate router
const router = Router();

// admin login
router.post('/login', controller.adminLogin);

// Admin logout
router.post('/logout', controller.adminLogout);



module.exports = router;