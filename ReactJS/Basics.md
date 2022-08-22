# Installation

After Node.js is successfully installed on your system, type the following command in your Command Prompt:

> **npm i -g create-react-app**

Here, npm stands for Node Package Manager, which gets installed while installing Node.js. Moreover, i stands for install, which is a command. You can also write install in place of i.

g stands for global and is preceded with a hyphen because it is a flag.

create-react-app is the name of the package that you need to install. It is a CLI tool that allows you to quickly create and run React applications, with no configuration required from the user's side.

This command will make npm install create-react-app package globally on your machine so that you can create a React application at any valid path on your system.

# Folder Structure

Note that the **index.html** file inside the public folder is your application's starting point. index.html file **should always remain with the same name and inside the exact location;** otherwise, your application does not run and throws an error. Similarly, **index.js** is the entry point for all of your JavaScript code. Like index.html, the name and location of index.js should not be altered. You must keep this in mind to ensure that your code runs successfully.

Following are the essential points to note about some files that you see inside your application folder:

**.gitignore file**

- Git uses it to determine which files and directories to ignore before making a commit.
- It should be committed into the repository to share ignore rules with other users who clone the repository.
- The node*modules folder is included inside the .gitignore file so that the user who clones the application is not required to clone this folder. The user needs to run the command
  \_npm install*
  in the root folder of the project. This command creates the node_modules folder and installs all the dependencies (packages) needed for the application.

**package.json file**

- It consists of the name and version of the application, the combination of which should be unique to publish the package.
- It includes dependencies that list all the packages needed to be installed for the application.
- It also includes scripts that specify the commands to be run at various points in the application life cycle.

**package-lock.json file**

- It is automatically generated for any operation where npm modifies either the node_modules tree or the package.json file.
- It locks the version of the entire dependency tree of packages.
- It guarantees the generation of an identical dependency tree when other developers clone the application.

**node_modules folder**

- The package.json file defines its contents, and it consists of all the packages required for running your application.

**public folder**

- Webpack processes nothing inside this folder.
- It is used for keeping small files that are not required to be bundled.
- It can be used to contain images when there are thousands of them, and their paths need to be referenced dynamically.
- Any file inside this folder needs to be referenced at other places using the %PUBLIC_URL%/ keyword, which gets replaced with the path of the public folder during the application's build process.

**index.html file**

- It is the starting point of the application.
- It should always remain with the name index.html and inside the public folder; otherwise, the code will fail to run.
- It can only reference files that are inside the public folder.

**manifest.json file**

- It is a simple .json file telling the browser about the web application and how the application should behave when it is installed on the user's mobile device or computer.

**src folder**

- It consists of the actual application code.
- It consists of all the needed files to get bundled by Webpack.

**index.js file**

- It is the entry point for JavaScript.
- The filename should remain index.js, and the location should be inside the src folder; otherwise, the code will not run.

**index.css file**

- It is the stylesheet for index.html.

**registerServiceWorker.js file**

- The web browser API is used to cache assets and other files to work passively in the background. It helps offline users or those on a slow network to see results on the screen faster.
- It adds offline capabilities to the application.

**App.js file**

- It is the JavaScript file for the App component.

**App.css file**

- It is the stylesheet for the App component.

**App.test.js file**

- It is the test file for the App component.
- It contains unit tests for the application.
- It runs test cases for all the files that changed since the last commit of the application.

**logo.svg file**

- SVG is an acronym for Scalable Vector Graphics.
- An SVG file is an XML-based vector image format for 2D graphics with support for interactivity and animation.
- It is similar to raster-based image formats such as JPEG, PNG, BMP, GIF, etc.
- It offers a bandwidth-friendly way of rendering images; no matter how large a graphic gets, it transmits only the XML describing the graphic to the client.
- It helps to render resolution-independent and SEO-friendly images.
- It makes up the icon for your application and appears alongside the title in the browser tab.
- It gets saved along with the bookmark.

## Differences between JSX and HTML :-

1. **Adjacent JSX elements must be wrapped in an enclosing tag.**

You cannot return multiple elements while returning JSX from a function or a class. You can return only a single element. This is why you need to encompass all children elements within a parent element and return this parent element. In case you fail to do this, you’ll get a syntax error saying, “Adjacent JSX elements must be wrapped in an enclosing tag”. However, in HTML, you can return as many DOM elements as you want. You do not have any rule of returning a single element.

Note that with the introduction to React 16, one can return an array consisting of multiple elements existing at the same level. These elements are separated from each other using a comma. Thus, one can write the following code snippet, which works fine in React 16:

`return [<div>`Phone Directory`</div>,<button>`Add`</button>,<div><span>`Name`<span>, <br/><span>`Phone`</span></div>]`

2. **Closing tag is required.**

In JSX, you need to close both types of tags — opening-closing tags as well as self-closing tags. For an opening tag, you need to explicitly write a closing tag at the end. For a self-closing tag, you need to put a forward slash before the closing angular bracket. If you fail to do this, you’ll get a syntax error saying, “Expected corresponding JSX closing tag for <br>”.

3. **JSX properties are not similar to HTML attributes.**

Some attributes you use in HTML cannot be used as JSX properties. You can see the entire list of such attributes [here](https://reactjs.org/docs/dom-elements.html "Forwards to React Docs"). This is because all of the JSX code gets converted to JavaScript code at the end. You know that JavaScript has its own set of keywords. If you try to write these keywords or reserved words as JSX properties, it gets confusing to identify when the word is being used as a JavaScript keyword (or reserved word) and when it is being used as a JSX property. To make this distinction, use alternative keywords in JSX for those HTML attributes, which exist in JavaScript language.

4. **Case sensitiveness.**

React ‘reacts’ to cases that you use! It doesn’t allow you to write something in any case that you want. On the other hand, HTML syntax is not case sensitive. You can choose to write the div tag as `<DIV>, <div> or <Div>`. Well, can you do the same in React? A big NO.

## {}

Curly braces {} are used as a special syntax in React. This can be used to evaluate a JavaScript expression during compilation. **The expression can be a variable, a function, an object, an arithmetic calculation, logical evaluation, or any code snippet that returns some value.**

All things inside Curly braces {} is treated as JavaScript Code.

## React.createElement() method

`React.createElement(element_name, element_properties, children);`

**This is the JavaScript Code Syntax for writing up HTML inside React.**

The first argument in this method is the name of the element to be rendered. This can be either your custom component or an HTML element. The second argument is the object that consists of property-value pairs that can be provided as attributes to this component or element. After these two arguments, you can pass an infinite number of children elements, which will be nested inside this main component or element. These children can, in turn, have other children elements nested inside them.

The first argument is mandatory, while the rest of the arguments that follow are optional.

Example about how JSX code gets converted to JavaScript code using React.createElement(). One such example is given below:

JSX code:

> `<div id="module"><p>ReactJS</p></div>`

JavaScript code:

> `React.createElement("div", {id: "module"},`<br> `React.createElement("p", null, "ReactJS")`<br/>`);`

We cannot return multiple items for a function in JavaScript and hence following JSX expression:-

> `<h1>Welcome to React</h1>` <br/> `<div>Hi</div>`

gets converted to following JavaScript Code which is not possible : -

> `return React.createElement("h1", null, "Welcome to React");` <br/> `return React.createElement("div", null, "Hi");`

and hence we get an error saying _JSX Expressions must have one parent element_.

Thus, whenever you use JSX to render DOM elements, the JSX code for the element gets converted to the React.createElement() method in JavaScript.
