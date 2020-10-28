

const BookModel = require('../models/book');

exports.getAllBooks = async (req, res) => {
     // Get all Books from database
    const allBooks = await BookModel.find();
    // Return books as response
    res.json(allBooks);
}

exports.getBookById = async (req, res) => {
    res.send('Specific book with ID, bookID');
}

exports.createNewBook = async (req, res) => {
    try {
         // Create new book
        const book = await BookModel.create(req.body);
        // Return book as response
       res.status(201).json(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.deleteBookById = (req, res) => {
    res.send('Deleted a book');
}

