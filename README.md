# Introduction

This git repository provides a hapi nodejs server that uses promster to export prometheus metrics. 
This server can be started in a docker compose environment that runs prometheus and grafana to retrieve metrics fom the hapi server.

It's used in an internal training on monitoring with prometheus, grafana and nodejs.

## Requirements

- yarn (https://classic.yarnpkg.com/lang/en/) needs to be installed
- docker (https://www.docker.com/) needs to be installed

## Installation

- change into `example-hapi-server` and execute `yarn install`

## Running

- execute `docker-compose up` in the root folder

# Accessing grafana

- you can access grafana as admin with `password` at: http://localhost:3000

# Exercises

* [Exercise 1](Exercise_1.md)
* [Exercise 2](Exercise_2.md)
* [Exercise 3](Exercise_3.md)
* [Exercise 4](Exercise_4.md)
* [Exercise 5](Exercise_5.md)
