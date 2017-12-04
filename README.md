# Alectronic-chripper 
[![Build Status](https://travis-ci.org/alectronic0/alectronic-chripper.svg?branch=master)](https://travis-ci.org/alectronic0/alectronic-chripper) 
[![codecov](https://codecov.io/gh/alectronic0/alectronic-chripper/branch/master/graph/badge.svg)](https://codecov.io/gh/alectronic0/alectronic-chripper)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dee9dee88033402086c7b70a2425c124)](https://www.codacy.com/app/alectronic0/alectronic-chirper)
[![dependencies Status](https://david-dm.org/alectronic0/alectronic-chripper/status.svg)](https://david-dm.org/alectronic0/alectronic-chripper)
[![devDependencies Status](https://david-dm.org/alectronic0/alectronic-chripper/dev-status.svg)](https://david-dm.org/alectronic0/alectronic-chripper?type=dev)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/alectronic0/alectronic-chirper)
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
