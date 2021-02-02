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

## Host your React application online for free

### Steps

1. Sign up on Netlify.com
2. Go to 'Sites'
3. Create a prod-build of your React App (`npm start build`). This will create a build folder
4. Drap-and-drop the 'build' folder in the 'Sites' tab (Step #2)

## React Advanced

### useState Hook

Say we have a title in a `<div>` that we need to set something else on a button click.

```JS
import React from "react";

const ErrorExample = () => {
  const title = "Random Title";

  const changeTitle = () => {
    title = "New Title";
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={changeTitle}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
```

Here, even after the button click the Title is not going to change in the UI, It will be different if you `console.log()` it.

This is because although the variable value has changed we're not re-rendering the said `<React.Fragment>` section, and it will continue to display the older value.

To overcome this, we can use the `useState()` hook.

When we use `useState()` function it returns an array[2] and it has ['value', 'handlerFunction'].

To summarize this in one statement, use the `useState()` method to set a 'value' and define a 'setValue' function and whenever you change this 'value' with the 'setValue' function it will re-render the UI view as well.

**The below example will work to change the Title for which we failed previously:**

```JS
import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Hello World!");
  // 1. useState responds with passed value and it's handler function
  // 2. We assign the value and it's handlerFunction to text and setText respectively.
  // 3. We use the {text} value in the <React.Fragment> section
  // 4. We use the setText() function to change the {text} variables value.
  // 5. The invocation of the setText() function is a "hook" to re-render the UI component with the updated value

  const handleClick = () => {
    if (text == "Hello World!") {
      setText("Alternate Title!");
    } else {
      setText("Hello World!");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
```

### Some React Hook Rules

1. Every React Hook is prefixed by the keyword 'use'.
2. **VIMP** The component in which you use a hook MUST be uppercase.
3. Must be in a function/component body (and not defined globally)
4. We cannot call a Hook conditionally. (For ex; in the above useState hook, it'll always get called when we change the value using 'setText()' method.

### useEffect Hook

This hook is used to change any state that is outside of the component.

For example, a button that changes the document title, signing up for subscription, adding an event listener, fetching data, etc.

useEffect = Work outside of the component

useEffect is defined as a callback function.

```JS
import React from "react";

const App = () => {
  useEffect(() => {
    console.log("Call useEffect!");
  });

  // Your code goes here...
}

export default App;
```

#### When does it run?

The useEffect hook runs after every re-render.

### useEffect conditional

Remember, we cannot call a hook conditionally.

To get around this, we can use conitional statements inside the hook.

For ex;

```JS
import React from "react";

const App = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 1) {
      console.log("Call useEffect!");
    }
  });

  // Your code goes here...
}

export default App;
```

#### Dependency list array in useEffect

Remember that we said useEffect will run EVERYTIME the component is re-rendered?

Welllllll...

This is a bit binding, what if you want to run useEffect only when a certain var (or any one from a list of vars) is updated?

This way you could setup multiple useEffects - having diff implementations - that will be triggered based on various var change.

Pass the list of variables as the second parameter to the useEffect and it will be triggered only when value of one of the vars passed changes.

```JS
import React from "react";

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= 1) {
      console.log("Call useEffect!");
    }
  }, [value]); // value from useState() mentioned above

  // Your code goes here...
}
```

### useEffect cleanup function

So, useEffect will basically run everytime a component is (re)rendered.

What if, we're adding an eventListener using useEffect, each time the component is rendered it'll add a new EventListener. This'll cause a memory-leak in the long run.

This is where the cleanUp function of a useEffect comes in play, with the cleanUp function you can clean up the previously added eventListener (or any other resource).

Clean up function will run from the second time the components are re-rendered and it runs before the useEffect (Remember from second time)

Ex:

```JS
const UseEffectCleanup = () => {
  console.log("Everything is compiled!");
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("Cleaning Up...");
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  return (
    <>
      <h1>window</h1>
      <h2>{size} Pixels</h2>
    </>
  );
};

export default UseEffectCleanup;
```

### Fetch data using useEffect

To fetch data using useEffect, you can call the data-fetching function in the useEffect first param.

**Note:** Most probably, the data-fetching function is going to be using `async` and `await`, and we cannot have that directly in the useEffect() function. So create a new function and call it from useEffect.

For ex;

```JS
import React, {useState, useEffect} from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // The second param makes sure this is rendered only one time.
  // This will stop the getUsers() from calling infinitely.

  // Code where it renders the 'users' variable
};

export default App;
```

## Short Circuit Operators

It is important to know short-circuit operators as we're going to use them to conditionally show/hide (render) different `<div>` of a component.

Given below is a short summary.

### Short circuit AND

- In an AND expression if **first value is true** then **second value** will be evaluated.
- In an AND expression if **first value is false** then **NOTHING** will be evaluated.

#### Example

1. This will evaluate to ""

```JS
const text = '';
const value = text && "Hello World!"
```

2. This will evaluate to "Hello World";

```JS
const text = 'Has a value';
const value = text && "Hello World!"
```

### Short circuit OR

- In an OR expression if **first value is true** then **first value** will be evaluated.
- In an OR expression if **first value is false** then **second value** will be evaluated.

#### Example

1. This will evaluate to "John Doe"

```JS
const text = 'John Doe';
const value = text || "Harry Potter"
```

2. This will evaluate to "Harry Potter";

```JS
const text = '';
const value = text && "Harry Potter"
```

## React Hook: useRef

useRef hook is similar to the useState hook, the only difference is that it DOES NOT trigger the re-render of the page.

1. It preserves values between render
2. It DOES NOT trigger the re-render of the page (unlike useState)
3. The main use-case if to target DOM nodes/elements

**Note:** The useRef hook will be triggered when submit button in form is clicked.

1. The ref value will resolve to the tag on which you can manipulate using DOM.
2. Or it will be resolved to the input value.

Setting up a useRef hook:

```JS
import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value); // Resolves to input value
    console.log(divContainer.current); // Resolves to div tag
  };

  console.log(refContainer);
  console.log(divContainer);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello World!</div>
    </>
  );
};

export default UseRefBasics;
```

## React Hook: useReducer

### Prerequisite

When your project gets more and more complicated and you want to loosely coupled parts, where each part is a subfolder having index.js (primary file which binds everything together) and other helping parts.

For ex, we can have:

```
src/ --> index.js ()
      |
      |--> sidebar/
            |
            |--> Index.js (Uses SideBarHeader and SideBarList JS files)
            |--> SideBarHeader.js
            |--> SideBarList.js
```

Here, the index.js will only import the `import {Sidebar} from ./sidebar` and can use `<Sidebar/>` component directly.

No need to separately import every other component.

### useReducer

We use useReducer to change states, as app become more complex you need a proper protocol to changing states. This protocol is usually followed by everyone in the team.
