const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://bala:Bala10427@cluster0.wsx9c.mongodb.net/department?retryWrites=true&w=majority';
//url = mongodb+srv://bala:<password>@cluster0.wsx9c.mongodb.net/<dbname>?retryWrites=true&w=majority


mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;