const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect('mongodb://localhost/my_database', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    });
}

connectToDatabase();