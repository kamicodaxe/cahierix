require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('./passport');
const handlebars = require('express-handlebars');
const cors = require('cors');

var app = express();

/**
 * Create HTTP server.
 */
const server = require('http').createServer(app);

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// Passport middleware to authenticate routes
app.use(passport.initialize());

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

// Protected Routes
app.use('/users', passport.authenticate('jwt', { session: false }), require('./routes/users'));

module.exports = { app, server };
