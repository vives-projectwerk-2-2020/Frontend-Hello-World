# Use the image with Node
FROM node:lts-alpine

RUN npm install -g http-server

# COPY ./src /usr/share/nginx/html

# work in the src folder
WORKDIR /src

COPY package*.json ./

# run the npm install command
RUN npm install

# Copy the content of the current directory 
COPY . .

RUN npm run build

# Open up port 8080 in the container
EXPOSE 8080

CMD [ "http-server", "dist" ]


# CMD [ "npm", "run", "serve" ]