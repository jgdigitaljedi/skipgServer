const express = require('express');
const path = require('path');
const morgan = require('morgan');
const winston = require('./api/config/winston');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
// [SH] Require Passport
const passport = require('passport');

// [SH] Bring in the data model
require('./api/models/db.model');
// [SH] Bring in the Passport config after model is defined
require('./api/config/passport');

// [SH] Bring in the routes for the API (delete the default routes)
const routesApi = require('./api/routes/index');

const app = express();

// app.use(morgan('dev'));
app.use(morgan('combined', { stream: winston.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(express.static(path.join(__dirname + '/public')));

// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());

// [SH] Use the API routes when path starts with /api
app.use('/api', routesApi);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// [SH] Catch unauthorised errors
app.use((err, req, res) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401);
		res.json({ message: err.name + ': ' + err.message });
	}
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use((err, req, res) => {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;
