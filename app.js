
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
const {ApolloServer, gql} = require('apollo-server-express');
const typeDefs = require('./schema/typeDefs')
const resolvers = require('./schema/resolver.js')
const mongoose = require('mongoose');
import * as AppModels from './models';
import {syncBlockChain} from "./helpers/sync";
import {syncTestBlockChain} from "./helpers/testSync";

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let cors=require('cors');

// connect to DB mongo
const uri = "mongodb+srv://qasim:qasim1234@abdulla.eftvp.mongodb.net/bcdblocally?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.Promise = global.Promise;
mongoose.connection.once('open', () => {
  console.log(' 🍃 connected to mongoDB mLab');
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: ({req}) => {
    let {
      user,
      isAuth,
    } = req;
    return {
      req,
      user,
      isAuth,
      ...AppModels,
    };
  }
});
server.applyMiddleware({app});

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

app.listen(4001, () => {
  console.log('🚀 now listening for requests on port 4001');
});

(async()=>{
  await syncBlockChain();
  await syncTestBlockChain();
})()

module.exports = app;
