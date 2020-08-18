const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const config = require('./config/config')[env];
const cors = require('cors');
const secret = 'secret';
require('dotenv').config()

const app = require('express')();
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const playRouter = require('./routes/play');


// mongoose.connect('mongodb://localhost:27017/pets', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

require('./config/express')(app);
app.use(cors({
  exposedHeaders: 'Authorization'
}));



app.use(cookieParser(secret));
app.use('/', playRouter);
app.use('/', authRouter);
app.use('/', indexRouter);
app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));