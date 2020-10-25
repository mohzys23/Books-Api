// Require Express Router
const Router = require('express').Router;
// Require Controller
const controller = require('../controllers/books');

// Instantiate Router
const router = Router();

// Get All Books
router.get('/', controller.getAllBooks);

// Get books by ID one
router.get('/:bookID', controller.getBookById);

// Create New Book
router.post('/', controller.createNewBook);

// Delete A Book
router.delete('/:bookID', controller.deleteBookById); 


module.exports = router; // Requir Express
