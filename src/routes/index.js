const express = require('express');
const router = express.Router();

// Redirects localhost home to log in page
//if no username has been given
router.get('/', (req, res) => {
    const username = req.cookies.username;
    if (username) {
      res.render('index', { username });
    } else {
      res.redirect('/hello');
    }
});

//log in page
router.get('/hello', (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

//posts username to app
router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

router.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

module.exports = router;
