const express = require('express');
const router = express.Router();

// Redirects localhost home to /beers
router.get('/', (req, res) => {

    res.redirect('/beers');
  }
);

module.exports = router;
