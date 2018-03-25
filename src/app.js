const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const beerRoutes = require('./routes/beers');

app.use(mainRoutes);
app.use('/beers', beerRoutes);

//Show an error and 404 if user types non existent url
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () => {
  //Test to see if app is running on port 3000
    console.log('The application is running on localhost:3000!');
});
