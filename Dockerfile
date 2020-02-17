# Use the image with PHP 7.2 and Apache as base image
FROM node:13.7


WORKDIR /src

COPY package*.json ./

RUN npm install

# Copy the content of the current directory to /var/www/html in the image
COPY . .

# Open up port 80 in the container
EXPOSE 8080

CMD [ "npm", "run", "serve" ]