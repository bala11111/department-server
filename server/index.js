const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000;
const db = require('./config/mongoose');


app.use(express.urlencoded());
app.use(cors());
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');
app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});

