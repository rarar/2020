var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var mlaiRouter = require('./routes/mlai');
var kaRouter = require('./routes/ka');
var artRouter = require('./routes/art-csd');
var ethicsRouter = require('./routes/ai-ethics');
var convoRouter = require('./routes/conversation');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ml-ai', mlaiRouter);
app.use('/ka', kaRouter);
app.use('/art-csd', artRouter);
app.use('/ai-ethics', ethicsRouter);
app.use('/conversation', convoRouter);

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

app.listen(9999, () => {
  console.log('yahoo! portfolio app running on localhost:9999');
});

module.exports = app;
