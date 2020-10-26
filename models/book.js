const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true },
    author: { type: mongoose.Schema.Types.String, required: true },
    number_of_pages: { type: mongoose.Schema.Types.Number, required: true },
    category: { type: mongoose.Schema.Types.String, required: true },
    rating: { type: mongoose.Schema.Types.Number, required: true }
});


// Model export

mongoose.model.expoers = mongoose.model("Books", BookSchema);