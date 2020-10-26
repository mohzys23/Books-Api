const mongoose = require('mongoose');

const connectToDatabase = async () => {

    try {
        await mongoose.connect('mongodb+srv://mosesdb:Ebubeubah@cluster0.ccpir.mongodb.net/mosesdb?retryWrites=true&w=majority', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        }
        );
        console.log("Database connection successful");
    } catch (error) {
        console.log(error.message);
    }

   

}

connectToDatabase();