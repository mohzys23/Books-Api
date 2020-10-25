exports.getAllAuthors = (req, res) => {
    res.send('List of all authors');
}

exports.getAuthorById = (req, res) => {
    res.send('Specific author with ID, authorID');
}

exports.getBookForAuthor = (req, res) => {
    res.send('All books by author');
}

exports.createNewAuthor = (req, res) => {
    res.send('Create a new author');
}

exports.deleteAuthorById = (req, res) => {
    res.send('Deleted an author');
}