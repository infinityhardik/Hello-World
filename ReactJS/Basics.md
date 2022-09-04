# React JS

React uses the concept of virtual DOM to speed up its performance. Using virtual DOM, we can only update the part that has been changed in Real DOM, not the whole document.

Data is handled in React using **State and Props**.

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

# Props

**Props stands for _properties_.** It help you to **pass values from a parent component to a child component so that they can be accessed within the child component.**

> **Information is exchanged between components using Props.** > **Props is an Object** It contains properties which can be accessed using dot (.) operator.
> To use them directly we can destructure them inside function parameters using curly braces. ({propertyName1, propertyName2, .....}) instead of using props.propertyName1 to access it inside the function.

### **Props in a functional component:**

A functional component accepts a **parameter** called props from the parent component. This parameter is an object that holds all the properties passed from the parent component to the child component. In place of props, you can use any other parameter name too.
Example:

```
const Organization = function(props) {
   return (
      <div>
         <h1>{props.name}</h1>
   <h3>{props.tagline}</h3>
   </div>
   )
}

<Organization name="UpGrad" tagline="Building Careers of Tomorrow"/>
```

### **Props in a class component:**

The properties passed from the parent component can be accessed using **this.props** keyword. Note that in class components, you need to use the keyword props only, unlike, in functional components where any parameter name can be used to represent the props of the component.

Example:

```
class Organization extends Component {
   render() {
      return (
         <div>
            <h1>{this.props.name}</h1>
            <h3>{this.props.tagline}</h3>
         </div>
       )
   }
}

<Organization name="UpGrad" tagline="Building Careers of Tomorrow"/>
```

A class needs to have a predefined keyword that can hold all the properties passed from the parent component to the child component. This predefined keyword is props. Thus, all the properties that are passed to a class component can only be accessed using 'this.props' keyword.

# Event Handling

**An Event is an action to be taken as a result of user interactions. An event handler is a method to be called when an event occurs.** A programmer can define a series of steps inside an event handler, which can be followed when the specified event occurs.

Notes:

1. An event name should follow **camelCase**.
2. It is good to prefix event handlers with **on**, such as _‘onSubmitOrder’_, or suffix them with the **handler**, such as _‘submitOrderHandler’_. This is done to clarify what these handlers do and what events they are attached to.

# Naming Conventions in React

### **className, onClick, CustomImage, onClickHandler**

1. The first word is the **CSS selector** for an element.

2. The second word provides the **on-click event** to an element.

3. The third word is used as the name of the custom image **component** being created.

4. The fourth word is used as the on-click **event handler** for an element.

_className_ and _onClick_ are correctly written in camelCase.

_CustomImage_, which is the name of a component, has its first letter capitalised, which is correct.

_onClickHandler_, which is the name of a method, starts with a lowercase letter, which is considered a good coding principle.

All the words are correctly written as per the naming conventions in React.

# State

**State is INTERNAL and controlled within a component, unlike props, which are EXTERNAL and are controlled by a parent component _(component that renders it)_.**

**A change in state calls the render() method again.**

Render() method is present only inside a class component because a class component extends from the Component class, which acts as the base class. This is the reason why class components are termed _‘stateful’_. This also concludes that functional components cannot contain state because they do not extend from the Component base class and, thus, do not have any render() method. This is why they are termed _‘stateless’_.

Example : Updating the State of Value inside element using input in Add Subscriber for Phone Directory App.

**Notes:**

1. State can be **maintained inside a class component only**.

2. State is **always initialised inside the class constructor**.

3. In case you define the constructor of a class, you need to call the _super()_ method in the first statement of the constructor definition. This method calls the constructor of the parent class.

4. **To set the state**, you must always use the **setState() method and must never directly manipulate the application’s state**. However, setState() should never be called inside the constructor.

5. Whenever **state is changed, the render() method of the class is called again.** >> This is evident when logging the data into the Console.

> Constructor is the only place where in a state can be initialised. After that, anywhere in the program we have to use the setState() method to set the state. Otherwise we will get an error.

# Component Lifecycle

Component life cycle in React varies from one process to another, and there are a total of three processes — Mounting, Updating, and Unmounting.

- **Mounting** refers to the instance of a component being created and inserted into DOM.

- **Updating** denotes the instance of a component being updated by props or state.

- **Unmounting** refers to the component being removed from DOM.

Inside the Mounting process, a component’s life cycle is defined by the following methods, which are called in the given order:

1. **constructor()**

2. **render()**

3. **componentDidMount()**

**A change in the state leads to the render() method being called again.**

# Smart vs Dumb Components

A **Dumb (aka Presentational) component only presents data on the DOM**. Only UI-based and is mainly responsible to present something on the DOM. Once that is done, the Component is done with it. It rarely has its own State. Whenever it has a State, it will only have a UI State.

On the other hand, a **Smart (aka Container) component provides data and logic to the dumb components.**
It generally wraps up other components by passing data and providing logic to them. It is like a Controller in your MVC Architecture > (Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller.)

**_Thus, Dumb components describe how things look, whereas Smart components describe how things work._**

# Routing

Routing is the process that helps in loading partial content, making it a dire need for building SPAs. Based on the URL that a user visits, specific content is loaded on the page, which helps in displaying different content to the users without any need for the page refresh. This is when the users get to see the entire application in a single page though it consists of multiple pages.

To implement Routing in your application, you’ll be using a node package called ‘react-router-dom’. This package provides React components to simulate server-side router handling. This package offers a BrowserRouter component, which you’ll use in your application.

# React Hooks

What is a Hook? A Hook is a special function that permits you to ‘hook into’ React States and enable you to get more out of the lifecycle features (ex: componentDidMount(), componentDidUpdate()).

When would you take advantage of a Hook? If you write a functional component and would like to feature a state to that, you had to convert it to a Class component earlier.

> Class components take prop as an input using which they can update the state. This is the reason why they are known as stateful components.

> We can manage the state through class components.

The differences between functional-based components and class-based components are :

| Functional Components                                                    | Class Components                                                                                |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| These take props as input and return the JSX.                            | These take input as a prop and also manage the state.                                           |
| These are known as stateless components.                                 | These are known as stateful components.                                                         |
| You did not have the access to lifecycle hooks in functional components. | You can access the lifecycle hooks in the class components.                                     |
| You cannot write logic in it because they are stateless.                 | You can have logic in this because you can manage the states inside the class-based components. |

Considering the above-mentioned differences, you will observe that you cannot do much with functional components. To fill this gap, React Hooks were introduced. Using the features of Hooks, you can manage the state. Moreover, hooks replace lifecycle hooks.

**Rules for Hooks** :-

1. Only call Hooks from React functions
2. Do not call Hooks from regular JavaScript functions. Instead, you can:

- Call Hooks from React function components, and
- Call Hooks from custom Hooks.

# useState() Hook

**useState** is a Hook that allows you to add the React state to function components. Using the useState() hook inside the function components, you can update/get the current state of the application.

**The useState() hook returns an array containing two parameters: The current state and the method used to update the state.**

Ex of useState() hook:

```
const [currentState, setCurrentState] = useState([initialState]);

// We are storing the outcome of useState Function in a variable using const. As the outcome is returned as an array, we are destructuring the array to denote the current state variable and the method to set it.
```

**How will useState work? Which functions will it carry out?**

The useState declares a ‘state variable’, and it can be another way to ‘preserve’ some values between the function calls. Recall the functionalities that this.state performs in a class. Imagine that useState provides the same capabilities to you easily. In general, variables ‘disappear’ once the function exits. However, the state variables are preserved by React.

**What will we pass to useState as an argument?**

The sole argument to the useState() Hook is the initial state.

**What will useState return?**

It returns a combination of values: a current state and a function that will update it. Recall the this.setState functionality, and it will become easy to correlate what useState would return

**How to use this React Hook**
You pass the initial state to this function (useState), and it returns a variable with the current state value and another function to update this value.

For example, this tiny code snippet will render a button, which, when clicked, will update the counter variable; this is done using useState.

```
const UpdateStateVar = () => {
  const [counter, setCounter] = useState(19)
  const handleClick = () => setCounter(counter + 1)
  return (
    <div>
      Button has been clicked {counter} no. of times!
      <div>
        <button onClick={handleClick}>Click me! </button>
      </div>
    </div>
  )
}
```

Here, useState(19) is the initial state, and you invoke the updater function that is returned by the useState invocation: const [valueOfTheState, updaterFunction], i.e., const [counter, setCounter].

Ex Question : What does the following code snippet do?

```
const [x, y] = React.useState('');
  const handleChange = event => {
	y(event.target.value);
  };
  return (
	<div>
  	<h1>Blogging</h1>

  	<label htmlFor="search">Search: </label>
  	<input id="search" type="text" onChange={handleChange} />

  	<p>
    	Searching for <strong>{x}</strong>.
  	</p>
  	<hr />

  	<List list={articles} />
	</div>
  );
};
```

It displays the current state and updates it within the App component’s event handler. > Correct, in the code snippet, we are updating the state with the event value. So, it displays the current state and updates it within the App component’s event handler.

# Filter() Method

Use Filter() method to Delete.

# useEffect() Hook

### Side Effects in React

- **Side effects** are those that affect things that are outside the scope of the present function that is being executed.
- They can be data fetching, manually updating the DOM, updating title of the Page, making an API call, etc. A functional React component uses props or states to calculate the output.
- If the functional component performs some actions that does not target the output value, then these actions or activities are called side effects.

**What is the function of useEffect?**

Using this Hook, you inform React that your component needs to carry out some activity after rendering. React will remember the function that you passed (we will refer to it as our ‘effect’) and call it later after performing the DOM updates.

The useEffect hook takes two parameters, a Callback Function and an optional Dependency List.

**How to use this React Hook?**

Let’s take a simple example code here to recall how useEffect works. Consider the following code snippet:

```
const { useEffect, useState } = React
const counter = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Aishwarya')
  useEffect(() => {
    console.log('Hello! ${name} You have clicked ${count} times')
  });

  return (
    <div>
      <p>Hello! {name} You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click here
      </button>
      <button onClick={() => setName(name === 'Aishwarya' ? 'Rai' : 'Aishwarya')}>
        Flip Name
      </button>
    </div>
  )
}
ReactDOM.render(<counter />, document.getElementById('app'))
```

Here, the function runs when the component is first rendered and re-renders or updates after that. React first updates the DOM and then calls any function passed to useEffect(). This happens without halting the UI rendering, which makes our code run and render faster.

Example : -

```
function Example() {
  const [x, y] = useState(0);

  useEffect(() => {
	document.title = `You have clicked ${x} times`;
	});
  return (
	<div>
  	<p>You have clicked {x} times</p>
  	<button onClick={() => y(x + 1)}>
    	Click Here!
  	</button>
	</div>
);
```

The useEffect hook is present in the snippet above, which means that it will re-render when the update is made. So, whenever you click the button, it will update the number of clicks.

If we want to have a Dependency for Use Effect Hook, then use the syntax >

```
useEffect(() => {
  console.log('How many times?')
}, [])
```

In the Array mention the Dependency variables. Since an empty array is passed, the effect will be executed only once.

# Forms & Routing

In the module on HTML, you learnt how to take input from the user using forms. React offers the forms on similar lines. The only difference is that in HTML, form data was handled by the Document Object Model (DOM), whereas in React, the data entered by the user will come into effect when you update the state. This is because in the React, State is the ‘single source of truth’.

In **HTML, forms are handled using DOM** (Document Object Model), whereas in **React forms are handled using Components**. _All the Data which is associated with the forms is stored in the State of the Components._

React forms are the same as HTML forms. However, in React, the state is stored in the component's state property.

_The components in a React form are thus unable to change their state directly. Their input is managed by a JS function that has direct access to the details submitted by the user in the form._

Example :-

```
<form>
    <label for="username">Name</label>
    <input type="text" name="username" id="username" placeholder="Enter Name..">
 </form>
```

This form has the default HTML form behaviour in which the user redirects to the new page while the user submits the form.

On the other hand, in React, this will work, but the standard way to handle the form data is using the JavaScript function, and this leads us to the concept of controlled components.

**Controlled components:**

In HTML, the form elements maintain their own state and update the data based on the user input. In React, the mutable state is typically kept in the state property of the components and is only updated with updating the state.

_Thus, an input form element in React whose value is controlled by React in such a manner that the component that renders a form also controls what happens in that form on the subsequent user input can be called a controlled component._

> Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values. (You can make a variable name point to a new value, but the previous value is still held in memory.

Example Form using Class Components :-

```
A simple example form would be as follows:

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  changeEventHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello There!{this.state.username}</h1>
      <p>Can I know your name?</p>
      <input
        type='text'
        onChange={this.changeEventHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));
```

# Material UI & Forms Validation

> Command for Material UI > `npm install @mui/material @emotion/react @emotion/styled`

> Command for React Material UI Form Validator > `npm i react-material-ui-form-validator`

In React, you will not build components from scratch and redefine the UI. What if you get all the components that you require to build for the application? In such a case, you only need to customise these components as per your needs. Thus, you do not need to create each component and write a CSS for it.

Also, simply having the input field in your application is not enough. You need to have a validation check whether the user has entered data or has submitted the form without giving any information. This type of activity leads to an inconsistency in the application data.

Material Design is a design language developed by Google in 2014. According to Google, it is a visual language that synthesises the classic principles of a good design, with the innovation of technology and science.

Material UI is the compilation of all the React components that implement Google’s Material Design, thus providing a better user experience while following user interface guidelines.

From design guidelines to developer components, Material UI consists of all the components that you need to develop efficient React applications with ease while unifying the user experience across varying platforms.

# useContext() Hook

For passing the information to child components or to sub child components, you use props, but this process can be cumbersome for properties such as theme and locale that are used by many components in an application.

In such cases, you can use the useContext hook. Context provides a way to share information between components without explicitly passing the props through the hierarchy.

The useContext hook defines the context Object, which will store some data and will make it available throughout the hierarchy without passing the data as props.

The useContext() method accepts a context within a functional component and works with a .Provider and a .Consumer component in one call. As an example, consider the following code snippet:

```
import React, { useContext } from "react";
import BackgroundContext from './BackgroundContext';
const MyComponent = () => {
  const colors = useContext(BackgroundContext);
  return <div style={{ backgroundColor: color.red }}>Hello There!</div>;
};
```

Here, we import the useContext() method and the BackgroundContext function and declare a functional component. The functional component MyComponent sets the value within your BackgroundContext as an argument to the useContext() method. Your return statement applies the background colour of your application. When a change triggers, the useContext() method will have the latest context value.

Example :

```
<SubscriberCountContext.Provider value={subscribersList.length}>
    <Footer ></Footer>
</SubscriberCountContext.Provider>
```

Placing the Footer inside the SubscriberCountContext allows the Footer component to consume the data generated by SubscriberCountContext.

# Back-end Integration

So far in our application, we have the static data on which we are working. In the real world, this is not the way in which data is handled.

In real life, we have the database at the back end that stores our data, and we can use, modify and operate on it using the APIs exposed by the backend server.

The useEffect hook is typically used to fetch data within a component.

# useCallback() and useMemo() Hook

In JavaScript, functions are first-class citizens, meaning that a function is a regular object. You can perform numerous operations with the object such as return it from other functions, compare them, etc.

Take a look at the code given below.

```
function sub() {
  return (a, b) => a - b;
}

const sub1 = sub();
const sub2 = sub();

sub1(8, 6); // => 2
sub2(8, 6); // => 2

sub1 === sub2; // => false
sub1 === sub1; // => true
```

Even though sub1 and sub2 share the same source code, they are different function objects.

Similarly, function objects sharing the same code are often created inside react components. For example:

```
function Foo() {
  // handleClick is re-created on each render
  const printWhenClick= () => {
    console.log('You Clicked!');
  };
}
```

printWhenClick is a different function object on every re-rendering of Foo.
This is when the useCallback hook comes into play. It returns the memoized function based on the dependencies. If the dependencies are the same between the two, re-rendering the useCallback returns the same function object.

The use of the useMemo hook is similar. It returns the memoized value instead of the memoized function, as it was done in the useCallback.

Memoized means storing/saving the Value for future reference.

useCallback Hook : It will return the memoized function based on dependencies.

useMemo Hook : It will return the memoized value based on dependencies.

Memoized : The Return Value of the Function will be saved based on the parameters.

> Memoization is an optimisation method for a given input to store the output of a costly measurement. For the following function calls, the cached output is returned as long as the same input is provided again.

**Suppose you have a component that renders a long list of grocery foods.**

```
import React from 'react';
import useSearch from './fetch-foods';

function ShoppingList({ term, onFoodClick }) {
  const foods = useSearch(term);
  const map = food => <div onClick={onFoodClick}>{food}</div>;
  return <div>{foods.map(map)}</div>;
}

export default React.memo(ShoppingList);
```

The list could be big and may include hundreds of food items. To prevent futile list re-renderings, you wrap it into React.memo().

The parent component of ShoppingList provides a handler function to know when a food item is clicked.

```
import React, { useCallback } from 'react';
export default function MyParent({ term }) {
    const onFoodClick = useCallback(event => {
    console.log('You clicked ', event.currentTarget);
  }, [term]);


return (
    <ShoppingList
      term={term}
      onFoodClick={onFoodClick}
    />
  );
}
```

The onFoodClick callback is memoized by useCallback(). If the term is the same, useCallback() returns the same function object. When the MyParent component re-renders, the onFoodClick function object remains the same and does not break the memoization of ShoppingList.

We can also use the useMemo as follows:

```
const List = React.useMemo(() =>
  myList.map(item => ({
	...item,
	itemProp1: function1(props.first),
	itemProp2: function2(props.second)
  })), [myList]
)
```

Example :- It will only be compiled once, as the dependency array is empty.

```
const deleteSubscriberHandler = useCallback(async (subscriberId)=>{
    const rawResponse = await fetch("http://localhost:7081/api/contacts/"+ subscriberId                                                                   ,{method:"DELETE"})
    const data = await rawResponse.json();
    loadData();
},[])
```

# useReducer() Hook

The useReducer hook can be used instead of the useState hook to manage the state.

The useReducer hook takes two parameters and returns the current state and the dispatch function to update the current value.

`const [state,dispatch] = useReducer(TotalSubscribersReducer,{count:0})`

As per the official ReactJS definition, useReducer is an alternative to the useState. It accepts a reducer of type (state and action) and returns the current state along with the dispatch method. A reducer returns the new state based on the action.

# Redux

It is a Framework used for **State Management** of entire Application.

Components > Dispatch the Action > Action contains the Information > Reducer : Reducer is just a pure function, which receives the old state and action as an input and returns an updated state > Updated State is given to the State Container > Subscription Model is connected to Components which will have updated state based on the Container State.

Flow of Redux >

In Redux, state containers store the entire application’s state. As you already know, in React, there are components, which may want to update the state or get the current state. So, to update the state in React, components dispatch the actions containing only information, not based on any logic as to how to update the state container. The actions are fed to the Reducer, which checks the type of information provided in the actions. The Reducer is just a function that receives the actions and the old state as an input and returns the updated state. The updated state then stores in the state container and replaces the old state. And then we have the subscription model to which component will subscribe and get the updated state.

State management is one of the crucial tasks to handle in ReactJS. When the application grows and various components are introduced in our application, it will be harder to maintain the state consistency.

So, for making state management easier, redux has been introduced.

In the last segment, you learnt that useReducer is an alternative to the useStatete hook.

In Redux, using the State container along with the reducer makes the state management quite handy.

Always remember to wrap the store at the root level of the application so that it can be accessed from anywhere, similar to how we wrapped in index.js under the ReactDOM.render() because it is where the rendering took place.

Provider makes the store accessible.

In Redux, the entire state is maintained in a single place. The state is immutable in Redux; any changes to the state must be done by cloning the state object and then making modifications to it. Changes are made to the state by means of pure functions called reducers, which take in the existing state and the change action and produce a new state object.

# Custom Hooks

React allows you to build your own custom hook, and you can modify the state in your own way.

The main reason for building the custom hook is that you can extract the component logic into the reusable function. Using this, you can dispatch the function which updates the component state that calls the function.

Component Logic refers to a logic we can use again and again across components rather than repeating them.

With Custom Hooks, We can extract the logic of function and make it reusable across the application. This will enable us to have more abstraction in our application.

# Testing

For writing the test case in jest, you only need to write the test() method.

The test() method accepts the following two parameters:

1. Name of the test
2. Callback function > In callback function , you call the function that you want to test and then compare the results using the expect() method.

Refer to the following code to gain more insight into this:

```
function add(a,b){
    return a +b;
}

test("Addition of two numbers",()=>{
    const actualResult = add(5,10);
    const expectedResult =15
    expect(actualResult).toBe(expectedResult);
})
```

In this example, if the expectedResult is equal to the value obtained by calling in the add, then the test case will pass; otherwise, an error will be thrown with a message that the expected value does not match with the value that you obtain from the function.

# Hooks Usage

1. useEffect :
   Whenever we want to make Back-end calls for Component/Data Loading using API from the server.

2. useState :
   For maintaining the state of the Input field.

3. useHistory :
   For Redirection to other Pages.

4. useDispatch :
   For maintaining an Application level state.

# Graded Questions

1. The useState() hook allows you to manage the state in the functional components.
2. `<input type="file" /> ` It is not possible to have file input as a controlled component in React, as its value can only be set by the user, and not programmatically. Hence, it is always used as an uncontrolled component.
3. Pure Functions : > Given the same input, pure functions will always return the same output. No matter where and how many times you call a pure function with a given input, it will always return the same output. > Pure functions produce no side effects. if you are not consuming the return value of a pure function, then the function is as good as a no-op.
4. Redux contains a state container known as store, which is used to update the state. And, this store can be accessed from anywhere in the application. This makes the store a global entity in Redux.
5. A reducer must always be a pure function. > As reducer is a pure function, and hence, it does not have an internal state that could potentially have side effects. Hence, it should not make API calls, as this would constitute a side effect. > A reducer generates changes to the state by returning a new state object that combines a copy of the old state and the new changes applied on top of it.
6. Enzyme : It is possible to render a component and test its props and state. > Enzyme can be used to render the entire component tree down to individual DOM nodes. > It is possible to access individual nodes within a component tree that is rendered by Enzyme using the CSS selectors.
7. In a functional-based component, we cannot access the lifecycle hook. No, we can not access the lifecycle methods in functional components. Functional components are known as the stateless components.
8. Consider the code snippet given below.

```
import { useEffect } from 'react';

function SayHello({ name }) {
  const message = `Hello, ${name}!`;

  useEffect(() => {
	document.title = 'Greetings page';}, []);

  return <div>{message}</div>;
}
```

> `document.title = 'Greetings page';}, []);`
> The first parameter of the useEffect hook is the callback function, which is executed every time the dependency is updated.

9. React supports client-side rendering as well as server-side rendering. In such a case, the initial rendering is generally done on the server. The HTML rendered by the server contains the UI, and once all the scripts are loaded, the components' event handlers are set up. Whether it is client-side or server-side, the final code is converted into JavaScript and is run on the browser.

10. Which of the following hooks can be used to manage state in functional React components?

    > The useState() hook allows you to manage the state inside the functional components.
    > The useReducer() hook is an alternative to the useState() hook and is used to implement state management using Redux-style reducer functions.

11. What will be the output of the following code snippet?

```
function Ticker() {
  const x = 0;
  const [tick, setTick] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTick(tick + 1)
    }, 1000)
  }, [x])
  return (
    <div>{tick}</div>
  );
}
```

The tick increments to one and then stops.

When the component renders for the first time, the tick displayed will be zero, as it has been initialised with zero. The setTimeout will then execute after a second, changing the value of the tick to one, which will be displayed. However, the useEffect hook will not be executed any more, as the dependency does not change, and as a result, the tick will remain one.

12. What will be the output of the following code snippet?

```
function Ticker() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTick(tick + 1)
    }, 1000)
  })
  return <div>{tick}</div>;
}
```

The tick keeps incrementing by one after every second.

In this case, the useEffect hook gets executed every time the component is re-rendered, which makes the setTimeout execute every second. This leads the timer to keep incrementing by one indefinitely.
