# Beer_app_CloudCW

Browse the Punk API which includes beers from Brewdog and read their funky names and witty descriptions.

If you enjoy the sound of a beer click save to add the beer name to a list of favourites.

This app was made using node.js, express.js, pug and the database is powered by Mongodb. All node modules are included.

Docker image from a parent image using a Dockerfile  running on node carbon.

Port used: 3000

To run the app:

First make sure you have node with npm installed.

Start mongo: $mongod --dbpath <...>

Database name: 'beers' ; collection name: 'beerlist'.

Docker:

Dockerfile and .dockerignore files included

to build image:

$ docker build -t <username>/node-web-app .

To run:

$ docker run -p 49160:3000 -d <your username>/node-web-app
