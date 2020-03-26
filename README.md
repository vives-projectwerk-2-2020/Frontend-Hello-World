# frontend-hello-world

<<<<<<< .merge_file_a39532
![Docker Image CI](https://github.com/vives-projectwerk-2-2020/Frontend/workflows/Docker%20Image%20CI/badge.svg?branch=master)
=======
![Docker Image CI](https://github.com/vives-projectwerk-2-2020/Frontend/workflows/Docker%20Image%20CI/badge.svg?branch=develop)
>>>>>>> .merge_file_a40712

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

---

## Website pages

### Home

Displays a map with all sensors currently in the network.

![Homepage image](./src/img/Homepage.png)

### Live Values

A page with current values of a selected sensor.

![Live values page](./src/img/Live-values.png)

### Historical values

A page with historical values of a selected sensor.

![Historical values page](./src/img/Historical-values.png)

### Login/registration

Allows users to login or register to the platform.

![Login/registration page](./src/img/Login.png)

### About

This page gives information about the Particula project.

![Login/registration page](./src/img/About.png)