# Beer_app_CloudCW

Browse the Punk API which includes beers from Brewdog and read their funky names and witty descriptions.

If you enjoy the sound of a beer click save to add the beer name to a list of favourites.

This app was made using node.js, express.js, pug and the database is powered by Mongodb. All node modules are included.

Docker image from a parent image using a Dockerfile  running on node carbon.


To run the app:

First make sure you have node with npm installed.

cd to path/src and run 'nodemon'  instead of  'npm start'

App uses Port: 3000. In browser type: http://localhost:3000/

Start mongo: $mongod --dbpath <...>

Database name: 'beers' ; collection name: 'beerlist'.

Docker:

Dockerfile and .dockerignore files included

to build image:

$ docker build -t <username>/node-web-app .

To run:

$ docker run -p 49160:3000 -d <your username>/node-web-app

Database secured with role-based policy:

{
  "_id": "beers.admin",
  "user": "admin",
  "db": "beers",
  "roles": [
    {
      "role": "root",
      "db": "admin"
    }
  ]
},
{
  "_id": "beers.myTester",
  "user": "myTester",
  "db": "beers",
  "roles": [
    {
      "role": "readWrite",
      "db": "test"
    },
    {
      "role": "read",
      "db": "reporting"
    }
