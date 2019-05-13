const express =require('express');
const bodyParser=require('body-parser');
const mongoose =require('mongoose');
const userRoute=require('./src/routes/user.route');
const blogRoute=require('./src/routes/blog.route');
const commentRoute=require('./src/routes/comment.route');
const eventRoute=require('./src/routes/event.route');
const authRoute=require('./src/routes/auth.route');
const imageRoute=require('./src/routes/image.route');
const recepieRoute=require('./src/routes/recepie.route');

const app = express();

let DEV_DB = 'mongodb://root:root123@ds127634.mlab.com:27634/mongo';
//const mongoDB = process.env.MONGODB_URI || DEV_DB;

//let DEV_DB = 'mongodb://localhost:27017/mongo';
mongoose.connect(DEV_DB, { useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: false}));
app.use('/api/v1/users',userRoute);
app.use('/api/v1/blogs',blogRoute);
app.use('/api/v1/comments',commentRoute);
app.use('/api/v1/events',eventRoute);
app.use('/api/v1/images',imageRoute);
app.use('/api/v1/recepies',recepieRoute);
app.use('/api/v1/auth',authRoute);

let port = 3000;
app.listen(process.env.PORT || port , () => {
    console.log('Server is up and running on port number ' + port);
});
