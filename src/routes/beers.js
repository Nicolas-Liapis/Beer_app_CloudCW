const express = require('express');
const router = express.Router();
const axios = require('axios');
const url = 'https://api.punkapi.com/v2/beers/random';
const MongoClient = require('mongodb').MongoClient;
var urlDB = "mongodb://localhost:27017/";

//Global variable name of beer
let name;


//Next beer button makes a new api call
//accesses database beers and collection beerlist
router.get('/', (req, res) => {

  axios
    .get(url)
    .then(response => {
      name = `${response.data[0].name}`;
      let description = `${response.data[0].description}`;
      console.log(name, description);
    const { id } = req.params;

    const templateData = { id };


    MongoClient.connect(urlDB, function(err, db) {
      if (err) throw err;
      var dbo = db.db("beers");
      dbo.collection("beerlist").find({}).toArray(function(err, result) {
        if (err) throw err;
        let beerArray = '';

        //Get from the database the saved beers
        for (let i=0; i<result.length; i++) {
          beerArray += '_____' + result[i].beername ;
        }
        console.log(beerArray);

        //Template used to use variables in beer.pug
        templateData.beerArray = beerArray;
        templateData.beerName = name;
        templateData.beerDesc = description;

        res.render('beer', templateData);
        db.close();
      });
    });
  });
})

//Save button functionality
//accesses database beers and collection beerlist and adds the beer to the list
router.post('/', function(req, res) {

    MongoClient.connect(urlDB, function(err, db) {
      if (err) throw err;
      var dbo = db.db("beers");
      var myobj = { beername: name };

      // Submit to the DB
      dbo.collection("beerlist").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("inserted:" + name);
        db.close();
      });
      res.redirect('/beers');
  });

})


module.exports = router;
