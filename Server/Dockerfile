# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm i

# Copy the application code to /app
COPY . .

# Expose the port that the application is listening on
EXPOSE 8000

# Start the application
CMD ["npm", "start"]