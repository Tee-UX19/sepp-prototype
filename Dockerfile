# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use an official Nginx image to serve the built application
FROM nginx:alpine

# Copy the built application to the Nginx HTML directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Define the command to run Nginx
CMD ["nginx", "-g", "daemon off;"]