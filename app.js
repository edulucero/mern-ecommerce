const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// import routes
const userRoutes = require('./routes/user');
const testRoutes = require('./routes/test');

// app
const app = express();

// db
mongoose.connect( process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then( () => console.log('DB connected') );

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// routes middleware
app.use('/api', userRoutes);
app.use('/test', testRoutes);

// server
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});