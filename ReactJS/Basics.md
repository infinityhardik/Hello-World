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

# JSX

JSX is an HTML looking syntax, but it is actually an XML extension to ECMAScript specification. Thus,instead of using pure JavaScript for building DOM elements, you can use JSX, which offers flexibility to developers to use the familiar syntax, viz HTML.

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

## Rendering Elements into the DOM

You can have as many root nodes inside your application as you want inside the _index.html_ file. One root node suffices in a small application, but you can have multiple root nodes depending upon the needs of your application.

When do you need to have multiple root nodes inside an application?

Can you recall that one of the advantages of using React is that it doesn’t make any assumption about your technology stack? Imagine that you want to ship only some features in React in an application, which is not primarily built using React. These features are spread across your entire application and are written at multiple places inside the application. Now, how will you achieve this without touching the rest of your independently existing code? This can be possible only when you can choose selective pieces of your existing code to be shipped, convert them into React, and then plug these new React code pieces back into different places inside your application. Having multiple root elements help you achieve this and, thus, redefine your application using React. Each root node can contain multiple React components, and these root nodes can be plugged into different places inside your application.

Syntax of the ReactDOM.render() method:

`ReactDOM.render(argument_1, argument_2);`

- _argument_1_ tells WHAT to render.
- _argument_2_ tells WHERE to render.

Notes:

1. There must be two arguments in the ReactDOM.render() method.

2. The first argument of the ReactDOM.render() method tells you what is to be rendered. This does not mean that only one element can be rendered in the first argument. Multiple elements can be rendered by enclosing them inside a parent div container. Also, this argument does not necessarily have to be a component. This argument can also take JSX code directly.

3. The second argument of the ReactDOM.render() method can be anything that specifies a location on the DOM, where the element(s) in the first argument need to be rendered.

4. Note that the second argument doesn’t necessarily have to be accessed using the _document.getElementById_ method. It can be any method as long as it gives a location on the DOM where the first argument needs to be rendered.

# Components

_Ex : Facebook News Feed posts containing the same structure of Like, Post and Comment._

React follows a Component based approach. **Component refers to independent and reusable piece of code that can be plugged in anytime and anywhere**. They are like JavaScript functions >> They accept arbitrary inputs called props and _return_ react elements describing what should appear on the screen.

_Thus Components are just JavaScript's way of writing independent, reusable, and dynamic code._

There are two types of components in React — **functional components** and **class components**. As the names suggest, functional components are written in the form of functions whereas class components are written in the form of classes.

Code Snippet 1 = Class Component:
`render() { return ( <div>Hello World</div> );}`

Code Snippet 2 = Functional Component:
`return ( <div>Hello World</div> );`

A class component must have a _render()_ function. This is because a class component extends from the Component base class. This is not the case with functional components. Since Code Snippet 1 has the render function, it belongs to a class component. On the other hand, since Code Snippet 2 does not have the render function, it belongs to the functional component.

#### Notes for Components :-

Notes:

1. **A component’s name must start with a Capital Letter** in order to distinguish between the predefined HTML elements and the custom elements (components) created by users. An example can be:
   `MyComponent`

   Thus, **HTML elements must start with lowercase letters** and components must start with Capital letters so that the JSX can distinguish between custom elements, i.e., Components and predefined HTML Elements.

2. **A class component must extend from a base class named _Component_.** For this, you also need to include Component as a named import from the ‘react’ library. A class component must always have a _render() function_.

   `import React, {Component} from 'react';`

   `class MyComponent extends Component {`
   `render() {// code here}`

   `}`

3. **A component must always return something.**

   _This returned value is the content rendered into the DOM; it replaces the component's name._

   In case you miss the return statement in a functional component, you will get an error saying, "Nothing was returned from render. This usually means a return statement is missing.". On the other hand, if you miss a return statement inside the render() function in a class component, you get an error saying, "Your render method should have a return statement".

   If you do not wish to return anything, you can return null from the component, as written below:

   `return null;`

   In any case, the return statement needs to be mandatorily written, no matter whether you wish to return anything or not.

4. In order to reference a component written in a separate file, you need to first export the component from the file where it has been defined and then import the component in the required file where it needs to be used.

5. A component can have a **file extension as .js or .jsx.**

6. _In the case of components where the file extension is .js or .jsx, the extension is not required to be explicitly mentioned while writing the import statement._

   For example, you can skip mentioning the file extension while writing the import statement when the Header file has the extension ‘.js’ or ‘.jsx’.

   `import Header from './Header';`

   However, **for all other files, the extension should also be mentioned along with the file name while writing the import statement.**

   Let’s say there’s a logo file with a .svg extension; you would need to mention the file extension when importing the logo file, as written below:

   `import logo from './logo.svg';`

In React, you should write reusable code snippets; this is one of the recommended coding guidelines in software development. Thus, using components saves you the trouble of rewriting redundant code at multiple places. This is why React is all about components.

Components are self-contained; you can save any information that you receive inside the component instance directly without leaving the component. _Components are reusable because it is no longer required to copy and paste the HTML code at multiple places._ You can simply create a component and call it at multiple places while changing its content dynamically. Components are customisable. Unlike predefined HTML elements, you can define your components in the way you want them to get rendered into the DOM.

# Styling

Styling makes a website look better. It is used to give a better appearance to the DOM elements. This is analogous to how painting the walls of your house makes the house look better.

### Notes :-

## **Inline Styling**

**_Approach 1_ : Directly writing style alongside JSX**

> `<div style={{textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase'}}> Phone Directory </div>`

**\_Approach 2\_\_ : Moving style as constant object**

> `const headerStyle = {textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase'}};`

> `<div style={headerStyle}> Phone Directory </div>`

1. It allows you to write styles in the same line with the element or component. This is why it is called ‘inline’ styling.

2. The style property is used with the element or component to be rendered into the DOM.

3. The _style_ property accepts a **JavaScript object** enclosed in curly braces.

4. **Two curly braces are used with the style property** — one to evaluate the expression inside the JSX code and the other to represent a JavaScript object, which is taken as input by the style property.

   `<div style={{}}> Phone Directory </div>` ​​​

5. The property names look like CSS property names, but they are not exactly like them. These names are actually JavaScript identifiers; they can be considered as the _keys (or properties) of a JavaScript object_.

6. **The property names must be written in camelCase**. Unlike CSS, hyphens are not allowed in JSX because the JSX code gets converted to JavaScript code, and hyphens are not allowed in JavaScript identifiers.

   `<div style={{textTransform: 'uppercase'}}> Phone Directory </div>`

   This is the reason why _textTransform_ is written in camelCase in JSX unlike _text-transform_ in CSS. If you fail to follow this, you will get an error saying “Uncaught SyntaxError: Inline Babel script: Unexpected token”.

7. The property values look like CSS property values, but they are not exactly like them. These values can be considered the values corresponding to the keys (or properties) in a JavaScript object. Since all the values in JavaScript must be of a valid datatype, care must be taken regarding each value correctly mapping to a valid data type in JavaScript.

   `<div style={{background: '#000'}}> Phone Directory </div>`

   This is why '#000' is written inside quotes, because it corresponds to a string value. In CSS, you must write it without quotes to make it work.

   If quotes are not there, it is considered to be a variable by Javascript since all code gets converted into JavaScript Code. For Numbers, quotes are not required.

8. All property-value pairs are separated using the comma operator. The reason is that the style property accepts a JavaScript object where a comma should be used in contrast to a CSS style, where a semicolon is used instead.

9. When a component or element is styled by moving out style as a constant object, only one pair of curly braces is used in the style property. Refer to Approach 2 of Inline Styling.

### **External Styling**

1. Write all the styles in an external stylesheet. **This is similar to writing external CSS while using proper selectors.**

2. Import this stylesheet in the file where the component or element is defined on which you want to apply the given style. Note that since the extension of a stylesheet is .css (not equivalent to .js or .jsx), you need to specify the file extension while writing the import statement for a stylesheet.

# Rendering Content Dynamically

The **map() method** in JavaScript creates a new array after calling the given function on each array element in order. Note that it does not change the original array.

JavaScript’s map() method can be used to iterate over an array and inject data into the React components or elements dynamically. You don’t need to hard-code the data inside each component. This is one of the major reasons why React refers to its components as ‘reusable’ entities. Also, this is yet another application where curly braces are used to write some JavaScript code alongside JSX.

**Notes:**

1. The entire map() method is written inside curly braces since it is JavaScript code that needs to be evaluated. Map() is a JavaScript function and returns an array after applying the given function to each element of the array.

   `{ arrayNameToIterateOver.map( //code here ) }`

2. In React, you need to give a unique key to each element being rendered into the DOM. In case you fail to do this, you will get a warning saying, _“Each child in an array or iterator should have a unique “key” prop”._

   To overcome this, you need to first assign each array element with a unique value for a property. Let’s say the property is _id_ ,and the unique values are 101 and 102, corresponding to the individual array elements.

<code> 
let demoArray = [
   {
      id: 101, // unique
      prop1: "SomeValForProp1",
      prop2: "SomeValForProp2"
   },
   {
      id: 102, // unique
      prop1: "SomeOtherValForProp1",
      prop2: "SomeOtherValForProp2"
   }
];
</code>

Secondly, you need to assign this property (_id_ here) to the property key of the outermost element inside the map method.

<code> {
demoArray.map(arrayElement => {
`return <div key={arrayElement.id}></div>`
})
}</code>

The concept of unique keys helps in distinguishing between different elements that are rendered into the DOM in React.