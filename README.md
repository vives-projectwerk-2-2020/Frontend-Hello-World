# frontend-hello-world

![Docker Image CI](https://github.com/vives-projectwerk-2-2020/Frontend/workflows/Docker%20Image%20CI/badge.svg?branch=master)

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker build

```bash
docker build -t <name> .
docker run -d -p 8080:8080 <name>
```

Setting `EXPOSE` port to 8080

-> `192.168.99.100:8080`

## To run with nginx

```bash
docker build -t <name> .
docker run -d -p 8080:80 <name>
```
