# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy app source code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
