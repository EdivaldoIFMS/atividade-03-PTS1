var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var noticiasRouter = require('./routes/noticias');
var noticias01Router = require('./routes/noticias01');
var noticias02Router = require('./routes/noticias02');
var noticias03Router = require('./routes/noticias03');
var noticias04Router = require('./routes/noticias04');
var noticias05Router = require('./routes/noticias05');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/noticias', noticiasRouter);
app.use('/noticias01', noticias01Router);
app.use('/noticias02', noticias02Router);
app.use('/noticias03', noticias03Router);
app.use('/noticias04', noticias04Router);
app.use('/noticias05', noticias05Router);

// catch 404 and forward to error handler
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
