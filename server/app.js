/*jshint esversion:6*/

// database connection
require('./configs/database');

const express         = require('express');
const path            = require('path');
const favicon         = require('serve-favicon');
const logger          = require('morgan');
const cookieParser    = require('cookie-parser');
const bodyParser      = require('body-parser');

// After express-session install, requires this:
const session         = require("express-session");
const passport        = require("passport");
const authController  = require("./routes/auth-controller");

const index           = require('./routes/index');
const users           = require('./routes/users');

// Require passport’s configuration:
require('./configs/passport')(passport);
const cors = require ('cors');

//app.use('/users', users);


// After that we need to configure mongoose:
const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/gran-despensa");

const app = express();

var whitelist = [
    'http://localhost:4200',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure the Passport session...
app.use(session({
  secret: "passport-local-strategy",
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

// Initialize auth modules:
app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app);

// app.use('/', index);     COMENTADO AL HACER LA API /////////

// Import the auth-controller:
app.use('/', authController);
//app.use('/users', users);

// app.use('/products', products);    COMENTADO AL HACER LA API ////////


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


//  we know we’re going to use a client application, we want
// to configure the client public index.html as a fallback page:

/*app.all('/*', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});*/


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
