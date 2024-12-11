
FROM node:18

# Set the working dir
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port 
EXPOSE 4141


CMD ["npm", "start"]