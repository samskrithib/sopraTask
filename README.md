# Flight

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## MEAN Architechture
M - Mongodb
E - Express
A - Angular 
N - Node

## Installation steps

1. clone the project and run npm install
2. Setting up MongoDB
   
   You have two options for setting up a MongoDB. You can either use a DaaS (Database as a Service) like mlab.com, or you can setup your own MongoDB locally & on the production server.
   
   We're going to set one up locally, which means you need to visit the MongoDB Downloads page and choose the appropriate installation package based on your OS. Once you have it installed, you need to visit the MongoDB Installation documentation which will show you the necessary steps for getting MongoDB up and running on your machine.
   
   For instance, on Windows, you have to start MongoDB at the command prompt
   "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
   Then, you have to open another command prompt and connect to it through the shell by running:
   "C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"
   Once you're in the shell, run the following commands to create a database:
   > use mean
   
   run the following command in the project folder:
   $ node server
   Then, visit http://localhost:3000/api
   

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Express server

Run `ng build` to create dist folder

Run `node server` on command line and navigate to `http://localhost:3000/`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
