# Base image
FROM node:17-alpine

# Set working directory
WORKDIR /picsome

# Copy package.json and package-lock.json
COPY package.json .

# Install Vite
RUN npm install -g vite


# Install dependencies
RUN npm install

COPY . .


# Expose port
EXPOSE 3000

RUN chmod -R 777 /picsome/node_modules

# Start app
CMD ["npm", "run", "dev"]