var createError = require('http-errors');
var cors = require('cors')
var cookieParser = require('cookie-parser')
var express = require('express');
var path = require('path');
var logger = require('morgan');



var app = express();


//These are the service which will be use by our discussion manager app
var authenticationService = require('./routes/authentication')
var chatService = require('./routes/chat')
var postsService = require('./routes/posts')
var profileService = require('./routes/profile')
var statisticsService = require('./routes/statistics')
var accountsService = require('./routes/accounts')




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json()); //this is to enable the passing of json in body of request
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())//NOTE------------------------------------------------------------

//Using services ... From cleint side we will use these prefixe before we use any service.

app.use('/authenticationService',authenticationService)
app.use('/postsService',postsService)
app.use('/profileService',profileService)
app.use('/statisticsService',statisticsService)
app.use('/chatService',chatService)
app.use('/accountService',accountsService)


app.use(function(req, res, next) {
  next(createError(404));
});

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
