# Use the image with Node
FROM node:13.7

# work in the src folder
WORKDIR /src

# copy all the package* files
COPY package*.json ./

# run the npm install command
RUN npm install

# Copy the content of the current directory 
COPY . .

# Open up port 8080 in the container
EXPOSE 8080

CMD [ "npm", "run", "serve" ]