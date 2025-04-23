# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install serve
RUN npm install -g serve

# Copy build files into the container
COPY build ./build

# Expose port (serve uses 3000 by default)
EXPOSE 3000

# Run serve to serve the static files
CMD ["serve", "-s", "build", "-l", "3000"]
