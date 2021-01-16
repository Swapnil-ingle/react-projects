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

## Clean-up the bioler-plate code

`create-react-app` command adds very much boiler plate code to your directory. You'll need to clear almost all the files except index.js.

## Creating first component

In React everything is a component, and you can reuse components in many different pages (Which are made up of diff components themselves).

To create a component we need to create a function in 'index.js' file which has a capitalized name (**It won't work otherwise**)

This function must return JSX (will discuss later).

```JS
import React from 'react';

function Greeting() {
    return <h4>This is my first React component!</h4>;
}
```

The above code will create a Greeting() component. However, we need to "inject" this component somewhere, right?

So we will inject it under the `div` where `id = 'root'`.

```JS
import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
    return <h4>This is my first React component!</h4>;
}

ReactDom.render(<Greeting/>, document.getElementById('root'));
```

This will now show-up on the browser window.

This is called as a 'Stateless Functional Component' Or 'Dumb Component' as it does not have anything to do with 'States'. This will ALWAYS return JSX.

## JSX Rules

JSX is kinda like HTML but not entirely HTML.

While returning a JSX from a dumb component, you've to make sure that the entire thing is wrapped into a single element, like a single div tag.

1. Instead of creating lots of div tags, use proper semantics like article, section, etc.
2. Instead of using 'class' use 'className' for defining the class of a tag.
3. Must close every element (tag)
