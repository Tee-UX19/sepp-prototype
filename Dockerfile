# Stage 1: Build the application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Update the base path in vite.config.js
RUN sed -i 's|base: .*$|base: "./",|' vite.config.js

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built application from the 'build' stage to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]