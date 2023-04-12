const mongoose = require('mongoose');

main();

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.MONGO_DBNAME,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (e) {
        console.log(e.message);
    }
}

module.exports = main;