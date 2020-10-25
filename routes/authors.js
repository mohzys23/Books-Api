const Router = require('express').Router;

const controller = require('../controllers/authors');
// Initiate router
const router = Router();


// All authors
router.get('/', controller.getAllAuthors);

// Author ID
router.get('/:authorID', controller.getAuthorById);

//Get books for an author
router.get('/:authorID:books', controller.getBookForAuthor);

// Create author
router.post('/', controller.createNewAuthor);

// Delete an author
router.delete('/:authorID', controller.deleteAuthorById);



module.exports = router;