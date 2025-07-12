# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json if present
COPY package.json ./
# COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build the project (transpile ES6+ to dist/)
RUN npm run build

# Expose the port your app uses
EXPOSE 5000

# Start the app in production mode
CMD ["npm", "run", "prod"]