
exports.getAllBooks = (req, res) => {
    res.send('List of all books');
}

exports.getBookById = (req, res) => {
res.send('Specific book with ID, bookID');
}

exports.createNewBook = (req, res) => {
res.send('Create a new book');
}

exports.deleteBookById = (req, res) => {
res.send('Deleted a book');
}
