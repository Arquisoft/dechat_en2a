# Dechat EN2A

[![Build Status](https://travis-ci.org/Arquisoft/dechat_en2a.svg?branch=master)](https://travis-ci.org/Arquisoft/dechat_en2a)
[![Coverage](https://coveralls.io/repos/github/Arquisoft/dechat_en2a/badge.svg)](https://coveralls.io/github/Arquisoft/dechat_en2a)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/03c3085c32754718868dadea59607494)](https://www.codacy.com/app/josecurioso/dechat_en2a?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Arquisoft/dechat_en2a&amp;utm_campaign=Badge_Grade)

[Check it out!](https://arquisoft.github.io/dechat_en2a)

## Contributors

*   Thomas Gardner Perry
*   Yeray Galán López
*   Álvaro Sánchez García
*   Ángel García Menéndez
*   Luis Pastrana García
*   Enrique José Rodríguez Martín
*   Jose Manuel Estrada-Nora Muñoz

## Documentation

The documentation is available [here](https://arquisoft.github.io/dechat_en2a/docs) 

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

### Getting started

First of all install node (& npm) and then execute `npm install` to install all the dependencies needed from now on. To view a live version of the app check out the Development Server section.

### Generating the documentation

Before doing anything with the documentation make sure to execute `npm run docs:prepare` for the dependency to be installed.

Execute `npm run docs:build` to generate the html documents and dependencies (will end up in `/docs`).

You can also use `npm run docs:watch` if you want a local version served on `http://localhost:4000/`.

### Development server

Run `npm start` for a dev server or alternatively `npm run start:https` for an https version with self signed certificates. <br>
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. <br>
*Note: the https version is provided so it can be accessed from a different machine and not trigger problems when logging in.*

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
For building and deploying to GitHub pages run `npm run ghpages:build` and everything will end inside the `docs/` folder.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Internationalization

Run `npm run int:extract` to extract from the html(ej: `<h3 i18n="Login description@@LoginDescription"></h3>`) to the xml internationalization file. 

Run `npm run start:es` to use the app in Spanish.

### Docker 

Run `docker build --rm -f "Dockerfile" -t dechat_en2a:latest .` to build the container with tag "dechat_en2a:latest".

Run `docker run --rm -d -p 81:81 dechat_en2a:latest` to run in the address configured by docker.

Run `docker tag tag1 tag2` to change the name of the tag

To upload it on [here](https://hub.docker.com/) :

*   Enter `docker login` and introduce your credentials.
*   Run `docker push nametag` to push it to the docker repository.

*Note: currently there is a problem with deploying the container (related to the https issue mentioned before).*

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
