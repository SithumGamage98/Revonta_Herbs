FROM node:16

# Creating app directory
WORKDIR /usr/src/app

# Installation of app dependencies
COPY package*.json ./

# Installation of requirements
RUN npm install

# Getting the bundle app source for the container
COPY . .

# host port initialization
EXPOSE 8080

CMD [ "node", "server.js" ]