const mongoose = require('mongoose');

const connectToDatabase = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        }
        );
        console.log('Database connection successful');
    } catch (error) {
        console.log(error.message);
    }

   

}

connectToDatabase();