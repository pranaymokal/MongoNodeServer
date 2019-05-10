const express = require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const app = express();

let DEV_DB = 'mongodb://root:root123@ds127634.mlab.com:27634/mongo';
//const mongoDB = process.env.MONGODB_URI || DEV_DB;

//let DEV_DB = 'mongodb://localhost:27017/mongo';
mongoose.connect(DEV_DB, { useNewUrlParser: true });

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const userRoute=require('./src/routes/user.route');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users',userRoute);
let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
