# frontend-hello-world

<<<<<<< HEAD
![Docker Image CI](https://github.com/vives-projectwerk-2-2020/Frontend/workflows/Docker%20Image%20CI/badge.svg?branch=master)
=======
![Docker Image CI](https://github.com/vives-projectwerk-2-2020/Frontend/workflows/Docker%20Image%20CI/badge.svg?branch=develop)
>>>>>>> develop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker build

```
docker build -t <name> .
docker run -d -p 8080:8080 <name>
```
Setting `EXPOSE` port to 8080

-> `192.168.99.100:8080`

## To run with nginx

```
docker build -t <name> .
docker run -d -p 8080:80 <name>
```
