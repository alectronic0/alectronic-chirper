# Alectronic-chripper

## intro

This is basic program twitter clone using the MEAN Stack & GDS tool kits.
Built by following this tutorial: https://www.youtube.com/watch?v=Jh0er2pRcq8

A working test of the application can be found here: https://alectronic-chipper.herokuapp.com/

## Quickstart

### Native Node.js
```bash
git clone https://github.com/alectronic0/alectronic-chripper.git
cd alectronic-chripper
yarn install
yarn setup
yarn start
```
default port is: 3000

### Docker Run
```bash
git clone https://github.com/alectronic0/alectronic-chripper.git
cd alectronic-chripper
docker build -t alectronic/chripper .
docker run alectronic/chripper
```
default port is: 3000


### Docker-Compose
```bash
git clone https://github.com/alectronic0/alectronic-chripper.git
cd alectronic-chripper
docker-compose up --build
```
default port is: 8080
