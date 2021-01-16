# React Fundamental Course

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

