
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package and package lock files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app code
COPY . .


RUN sed -i 's|base: .*$|base: "./",|' vite.config.js

# Build the application
RUN npm run build


FROM nginx:alpine


COPY --from=build /app/dist /usr/share/nginx/html


EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]