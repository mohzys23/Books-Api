// Requir Express
const Router = require('express').Router;

// Requires book router
const booksRouter = require('./books'); 

//  Requires author router
const authorsRouter = require('./authors');

// Require admin router
const adminRouter = require('./admin');

const router = Router();



//Home Route
router.all('/', (req, res) => {
    res.send('Api home router');
});


// Books Route 
router.use('/books', booksRouter);

// Authors Route
router.use('/authors', authorsRouter);

// Admin route
router.use('/admin', adminRouter);



module.exports = router;


