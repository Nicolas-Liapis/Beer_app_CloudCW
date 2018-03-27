FROM node:carbon

# Create app directory
WORKDIR /usr/src/

# Install app dependencies

COPY src/package.json ./

RUN npm install


# Bundle app source
COPY src /usr/src

EXPOSE 3000
CMD [ "npm", "start" ]
