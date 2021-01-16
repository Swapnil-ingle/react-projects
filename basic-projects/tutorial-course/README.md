# [React Fundamental Course](https://www.youtube.com/watch?v=4UZrsTqkcW4&ab_channel=freeCodeCamp.org)

To get started with React, need the following softwares:

1. Node JS (Run `npm --version` to see the NodeJS version)

## Init the React NodeJS structure

Init the NodeJS package using `npm init`

This will create a package.json file, which has all the dependencies.

## To add a new package

### Install package locally (default) and add to package.json
`npm install <package-name> --save`

### Install package globally (access anywhere) requires SUDO
`npm isntall <package-name> -g`

### Use it only in development
`npm install <package-name> --save-dev`

#### Note (How to clone and use on new machines)

Add the package.json in your GitHub repository and not your node_modules folder.

Whenever a new person will clone the repo, he'll need to run `npm install` command and this will download and install all the dependencies in his local repo.

## Creating a new React App

Once you've installed the npm, you've to use the `npx create-react-app <app-name>` command and it will create a base-template of the React app to use.

> npx create-react-app comes pre-installed with npm v5.2+

## Run the newly created App

You can run the newly created application with `npm start` command. This will start the application in your browser on 'http://locahost:3000' URL, with hot-reload capability.

## Build a production ready copy of your app

Run `npm run build` and this will create a 'build' folder which has all the minified code and dependencies. You can use this to build folder and run it on your prod-server.

For ex; you can drag-and-drop the build folder on netlify.com to host your own React app there.