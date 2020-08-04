var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const apiRouter = require('./routes/api')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    req.headers.message = "He modificado la request."
    const { authorization } = req.headers
    if(!authorization) {
        return res.status(403).json({
            message: "Esta es una zona prohibida"
        })
    }
    next()
})

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
