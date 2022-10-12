- JavaScript can be used on the client-side as well as on the server-side.
- Node.js is a JavaScript runtime built on a V8 JavaScript engine.
- The Just-In-Time compilation technique converts JavaScript code directly into binary form. Using the Just-In-Time (JIT) compilation technique, the JavaScript code gets directly compiled into the low-level machine code, which is in the binary form. This low-level machine code can be directly run on the machine without it being interpreted, thereby eliminating the need for an interpreter, and no intermediate code is generated. Thus, this is one of the correct options.
- **DOM (Document Object Model) manipulation can be achieved using the client-side JavaScript language only.**Manipulating the DOM first requires the DOM (Document Object Model), which needs to be rendered on the client (browser). Thus, this can be achieved using the client-side JavaScript language.
- **Local file system management can be achieved using the Node.js language only.** The management of the local file system requires you to interact with the file system locally. This cannot be done on the client-side due to security reasons. This is why it is done on the server-side using the Node.js language.
- Thus, DOM cannot be managed using Node.js and Local File System cannot be managed by the client-side JavaScript language.
- Node.js uses non-blocking I/O and event-driven architecture. Node.js is built for extensive I/O operations that can be handled in a non-blocking manner or, we can say that it handles requests asynchronously.
- Node.js is capable of serving multiple concurrent events in a single thread. Node.js supports concurrency in a single thread using an event queue to monitor all the requests.
- The require keyword is used to import a module, for example, var fs = require('fs');

- **Modules** are individual JavaScript files containing code that pertains to a single concept, functionality, or library.
- **Packages** may contain multiple modules or a single module, which are used to group files offering relevant tools.
- **Dependencies** are Node.js modules used by an application or another module.
  - _Types of Modules / Packages :_
  1. **Custom modules/packages :** These modules/packages are created and defined by the user.
     > You need not install a custom module. However, you need to use the require function to import a custom module by providing its path to start using it.
  2. **Third-party modules/packages :** These modules/packages are provided by Node Package Manager. They have already been created by someone else for you.
     > You need to install a third-party module via NPM and import the module using the require function while providing the name of the module as the ID to start using it.
  3. **Core modules :** These modules are provided by Node by default; you need not define them.
     > Also, these are not required to be installed prior to their usage. You can simply use the require function to import a core module to start using it.
     > To view the list of all the core modules, you can use the following command : `console.log(require('module').builtinModules);`

# Folder Structure

- The **package.json** file is the file that is created when we create a new project in node.js, which has all the project configuration details and also keeps on getting updated as we install new external dependencies into our application. The package.json file is the file that is created when we create a new project in node.js, which has all the project configuration details and also keeps on getting updated as we install new external dependencies into our application.
- The **node_modules** folder contains the source code of the external modules js or library files that we install and use in our application.

# Building Web Server in Node.js

- A web server is software designed to respond to requests over the internet by loading or processing data. Web servers follow hypertext transfer protocol (HTTP), a standardised system that is globally observed to view web pages and send data over the internet.
- A web server receives HTTP requests from a client (for example, a browser) and provides an HTTP response (for example, an HTML page or JSON/XML) from an API.

  - A web server is used for handling all the HTTP requests received from the client-side, processing the expected responses, and dispatching the responses to the client.

- HTTP Methods :-

  1. **GET** > This method is used to extract data from the given URL and it does not modify the data
  2. **POST** > This method is used to send user data to the server. It can also be used to create a new entity.

     - The parameters passed along with the POST method are not a part of the URL; hence, they are not stored in the browser history

  3. **PUT** > This method is used to either create a new entity or update an already existing entity.
  4. **DELETE** > This method is used to remove all the resources provided by the given URL.

- HTTP Status Codes :-

  1. **200 - OK** > This status code shows that the request was successfully carried out.
  2. **301 - Moved Permanently** > This status code represents that the data that is being requested is not found at the given address and has been moved to a different address permanently.
  3. **302 - Moved Temporarily** > This status code represents that the data that is being requested is not found at the given address and has been moved to a different address temporarily.
  4. **403 - Forbidden** > This status code represents that the client who is trying to access the data is not authorised for the same.
  5. **404 - Not Found** > This status code represents that the requested server is no longer found at the given address.
  6. **500 - Internal Server Error** > This server response functions as a collection status code for an unexpected server error(s).
  7. **503 - Service Unavailable** > This server response indicates that the server that is trying to be accessed is currently overloaded.

- A **Callback** is an anonymous function (a function without a name) that is to be invoked as soon as another function completes its execution.

  - In case of the HTTP web server, many requests are received and each request processing takes a different time to complete. Thus, here the callback function intimates the client only when the response is ready.
  - **Callbacks** can be defined as anonymous functions i.e. a function with no name and just parameters.
  - A callback is a process in which the caller method is called back once the processing is done.

- Use **const** instead of **var** to store the HTTP server in your application.

  - This is because the server will continue to listen for communication from clients, and it is important not to re-assign the variable representing the server.
  - Moreover, in ES6, it has become a convention to mark these objects as constants, not re-assignable variables

- A **route** is a way of determining how an application should respond to a request made to a specific URL.
  - Routing involves routing different requests to different request handler methods, whether it is Node or any server-side/client-side programming. In other words, it is the mechanism that is used to route different requests to specific methods based on the route URL of the request method.
  - ‘/’ is the home page, index page, or default page.
  - Mapping of routes to the responses is called **routeResponseMap**.

## fs Module

- _fs_ stands for '**File System**'. This module provides the capability of local file management, which is not provided by the client-side JavaScript. The fs module offers APIs for interacting with the file system.
- All the file system operations in Node.js follow synchronous as well as asynchronous forms :-
  - The **asynchronous** form takes a completion **callback** as its last argument, which is invoked when the asynchronous file operation finishes its operation. The first argument of this completion callback is reserved for the exception, which is assigned the value **null** or **undefined** when the file operation is successful.
  - The **synchronous** form is written inside the **try-catch** block, and if an error or exception occurs, it is handled by the **catch** block.
- Common _fs_ module APIs :-
  - Read Files = **fs.readFile( path, [options], callback )** > used to **asynchronously** read files on your computer.
  - Append Files = **fs.appendFile( path, data, [options], callback )** > used to asynchronously append data into a file or create a file if it does not exist.
  - Open Files = **fs.open( path, [ flags [ mode ] ], callback )** > used to asynchronously open the file if it already exists or create a new file and open it if it does not already exists.
  - Write Files = **fs.writeFile( file, data, [options], callback )** > replaces the specified file and content if it exists. If the file does not exist, a new file containing the specified content is created. > When you use **writeFile** API inside the fs module, it **asynchronously** writes data to a given file. > When you use **writeFileSync** API inside the fs module, it **synchronously** writes the given data to a file.
  - Remove Files = **fs.unlink( path, callback )** > used to asynchronously remove a file.
  - Rename Files = **fs.rename( oldPath, newPath, callback )** > asynchronously renames the file at oldPath to the pathname provided as newPath. If newPath already exists, it is overwritten. If there is a directory at newPath, an error is thrown instead.
  - Make Directory = **fs.mkdir( path, [mode], callback )** > used to create a directory in the path provided, and along with it, we can set the permissions using the node.

# MVC = Model View Controller

- Our **application’s assets are the images, stylesheets and JavaScript** that work alongside the views(HTML files) on the client side.
- To better organise the view part, you need to create a public folder at your project’s root directory, and move all your assets there. Inside the public folder, you need to create a folder each for images, css and js, and move each asset into its respective folder.
- The view of the application resides in views and public folder.
- As all the _routing code_ is present in main.js, it forms the **CONTROLLER** part of this project.

# MVC Folder Structue :

- ## serve_html

  1. main.js
  2. package.json
  3. router.js

  - ## views
    1. index.html
  - ## public
    - ## images
    - ## css
    - ## js

- **views** > This is the folder in which we should put HTML structures, CSS properties and their client-side JavaScript functions.
- **public** > This is the folder in which we should also put public HTML structures, CSS properties, their client-side JavaScript functions and images that we are using statically in our application.

# Data

- **Data > Process > Information** = When raw data is processed, it becomes information, which is useful and meaningful. Ex : 12121995 > 12/12/1995.
- The _file system_ is a traditional way of storing data.

  - Disadvantages :-

  1. Data redundancy > There can be multiple records of the same entity in a file system, which results in data duplication.
  2. Data inconsistency
  3. Difficulty in accessing data
  4. Integrity and atomicity not achieved
  5. Concurrent access not allowed
  6. Lack of security

- **Database** > To overcome the shortcomings of file systems, we use databases.
- A database is an organised collection of meaningful and useful information that is stored and accessed through computers. In other words, it is a method that is used widely to _store, retrieve and manage data_.

- A **relational database** means a collection of data items stored in a tabular (table) format with a predefined relationship between them.
- In a **non-relational database**, data is stored in an unstructured format. Unlike relational models, there is no relation between the tables in a non-relational database.

- Data stored in MongoDB documents are in key-value pair.
- MongoDB documents are similar to JSON objects.
- We don't have to define the type of value (array of objects, objects, string, number etc.) of a field in the MongoDB documents.

# Mongoose

- MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases.
- **Mongoose** is an **Object Document Modeling (ODM)** layer that sits on top of the Node.js MongoDB API. If you’re coming from an SQL background, then Mongoose is similar to an **Object Relational Mapping (ORM)**.
- Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
- It has information about properties/field types of documents. Schemas can also store information about validation and default values, and whether a particular property is required. In simple words, they’re blueprints for documents.
- A model is a class with which we construct documents.
- Mongoose Relationship Models :

  - Types of associations :

  1. One-to-One
  2. One-to-Many
  3. Many-to-Many

  - Example of Associations :-

  1. One-to-Many: When one entity is related to another entity with multiple values. For example, a person can have multiple contact details.
  2. One-to-One: When one entity is related to another entity with only one value. For example, a person has only one primary bank account in a bank.
  3. Many-to-Many: When multiple entities are related to multiple other entities. For example, multiple teachers can teach multiple students in a school.

  - Data Models:

  1. Reference Data Models (Normalisation) > In this model, an object A connects to the object B by reference to object B id or a unique identification field. Example :-

  ```js
  // SchoolAdmission
  {
  _id: "12345xyz",
  enrollmentCode: "Sri130421"
  }
  // Child
  {
  _id: "sri123",
  name: "Sristhi",
  age: 4,
  gender: “female"
  }
  ```

  2. Embedded Data Models (Denormalisation) > In 'Embedded' data model, instead of using a reference, object A contains the whole object B, or object B is embedded inside object A. Example :-

  ```js
  // SchoolAdmission
  {
  _id: "12345xyz",
  enrollmentCode: "Sri130421",
  child:
    {
      _id: "sri123",
      name: "Sristhi",
      age: 4,
      gender: "female"
    }
  }
  ```

- **Data access** considers how often data is read and written i.e. find the **read/write ratio**.
- If the collections that we’re working is read more often than updated, i.e. there is a lot more reading than writing (a high read/write ratio), then we should embed the data.
- The reason is that by embedding we only need one trip to the database per query while for referencing we need two trips. In each query, we save one trip to the database which makes the entire process way more effective.
- For example, a blog post having about 7-10 Images would be a good candidate for embedding because once these Images are saved to the database they are not really updated.
- On the other hand, if our data is updated a lot then we should consider referencing (normalising) the data. That’s because the database engine does more work to update and embed a document than a standalone document, our main goal is performance so we just use referencing for data model.
- For example, each tutorial has many comments. Each time someone posts a comment, we need to update the corresponding tutorial document. The data can change all the time, so this is a great candidate for referencing.
- The last criterion (**Data Cohesion**) is just a measure for how much the data is related to each other. If two collections intrinsically belong together then they should be embedded into one another.
- In our example, all tutorials can have many images and every image intrinsically belongs to a tutorial. So images should be embedded into the tutorial document.
- If we frequently need to query both collections, we should normalise the data into two separate collections however closely they are related.
- Imagine that in our tutorial blog, we have a widget called recent images, and images could belong to separate tutorials. This means that we could query images on their own collections without necessarily querying for the tutorials.

# Tips for Data Modelling

- In **One-to-Many** relationship , we don’t have any standard or specific rule for all cases, it depends on the ways your application queries and updates data.
- In **one-to-few** and **one-to-many** relationships, prefer embedding.
- In **One-to-aLot** relationships, prefer referencing.
- Use embedding when data is mostly read but rarely updated, and when two models belong intrinsically together.
- Prefer referencing when data is updated a lot, and you need to frequently query a collection on its own.
- Never allow arrays to grow indefinitely. Thus, prefer using **child referencing** for **one-to-many** relationships, and **parent referencing** for **One-to-aLot** relationships

# Many-to-Many Relationship Model

```js
// Tutorial
{
  _id: "5db579f5faf1f8434098f123"
  title: "Tut #1",
  author: "rocky"
  tags: [
    {
      name: "tagA",
      slug: "tag-a"
    },
    {
      name: "tagB",
      slug: "tag-b"
    }
  ]
}
```

```js
// Tag
{
  _id: "5db579f5faf1f84340abf456"
  name: "tagA",
  slug: "tag-a"
  tutorials: [
    {
      title: "Tut #1",
      author: "rocky"
    },
    {
      title: "Tut #2",
      author: "prachi"
    }
  ]
}

```

- Presently we’ve done **Two-way Referencing** where Tags and Tutorials are connected in both directions:

  - In each tag, we keep references to all tutorials that are tagged.
  - In each tutorial, we also keep references to its tags.

- For embedded data models, you can see that we can get all the data about tutorial with its tags (or tag with its tutorials) at the same time, thus our application will need fewer queries. This results in increased performance.
- But when the data becomes larger, duplicates are inevitable. Duplicates increase the risk for updating the document.
- For example, if you want to change the name of tagB, you have to change not only the tag’s document but also find the tutorial that contains that tag and update the field.
- Hence, with **Many-to-Many relationship**, we always use **data references** or **normalising**.

# Express.js

- A web framework is a pre-defined application structure and a library of development tools, to make building a web application easier and more consistent.

  - A web framework is designed to do a lot of tedious tasks for us hence giving us a simple structure for customizing our app.
  - A web framework like Express.js operates through functions considered to be middleware because they sit between HTTP interaction on the web and the Node.js platform.

- Express.js is a Node.js Framework.
- Any Express.js application has four key parts:

  1. The require statement
  2. Middleware
  3. Routing
  4. app.listen() to start the server

- Middleware = one which sits between the request and the response.
- Middleware is a general term applied to code that assists in listening for, analyzing, filtering and handling HTTP communication before data interacts with application logic.
- Express.js stands between the HTTP requests and your application code.

# Routing in Express.js

- Routing means assigning functions to respond to users’ requests.
- Express routers are basically **middleware** _(meaning they have access to the request and response objects and do lots of work for us. Hence codes written using Express.js is shorter and more readable than plain Node.js)_.
- Syntax : app.VERB('path', callback…); Here, VERB can be either GET, POST, PUT, or DELETE.

- Calling **next()** at the end of your function is necessary to alert Express.js that your code has completed.
- The next() function, when called, moves control to the next middleware or route.
- Not doing so leaves your request hanging. Middleware runs sequentially, so by not calling next, you’re blocking your code from continuing until completion.

# Request Object

- The request object contains information about the incoming request.
- The most useful properties of request object are:

  1. **request.params** holds all GET parameters
  2. **request.body** stores POST form parameters
  3. **request.query** property is used to extract the GET form data
  4. **request.headers** hold key/value pairs of the request received by the server. Servers and clients make use of headers to communicate their compatibility and constraints.
  5. **request.accepts(['json','html'])** holds an array of data formats and returns the the browser preferred format of data
  6. **request.url** stores data about the URL of the request
  7. **request.ip** holds the IP (Internet Protocol) address of the browser requesting for information.

- A **query string** is text represented as key/value pairs in the URL following a **question mark(?)** after the hostname.
- For example: http://localhost:3000?name=suven here, you are sending the name (key) paired with suven (value). This data can be extracted and used in the route handler.

```js
  const express = require('express');
  const app = express();
  const port = 3000;

  app.get('/:name/:age', (request, response) => {
    response.send(request.params);
  });

  //The colon before the parameters differentiates the route parameters from normal route path

  //Binding the server to a port(3000)
  app.listen(3000, () => console.log('express server
  started at port 3000'));

  // https://localhost:3000/suven/17
```

- The request.query property is used to extract the GET form data;

```js
  <!-- form.html -->
  <!-- action specifies that form be handled on the same page -->
  <form action='/' method='GET'>
  <input type='text' name='name' placeholder='ur name'/>
  <input type='email' name='email' placeholder='ur email'/>
  <input type='submit'/>
  </form>

  // server side code for express-query example
  // loading express
  const express = require('express');
  app = express();

  //route serves both the form page and processes form data
  app.get('/', (request, response)=>{
  console.log(request.query);
  response.sendFile(__dirname +'/form.html');
  });
  app.listen(3000,() => console.log('Express server started at port 3000'));

// Run the code with node server.js, hit localhost:3000, and fill and submit the form in your browser. After submitting the form, the data you filled out gets logged to the console.
```

- There are multiple ways to send data from client to server:

  - **query strings:** ?(symbol) is used to concat key=value pairs to the URL
  - **URL parameters:** :(symbol) is used to concat

- The **request.body** property contains key-value pairs of data submitted in the request body.
- By default, it is undefined and is populated when we use a middleware called **body-parser**. Such as bodyParser.urlencoded() or bodyParser.json(). > The body-parser package, can handle many forms of data. This package is a middleware. It intercepts the raw body and parses it into a form that our application code can easily use.

- We call app.use(...) before defining our route. The order matters. This will ensure that the body-parser will run before our route, which ensures that our route can then access the parsed HTTP POST body.

- There is a special routing method, **app.all()**, used to load middleware functions at a path for all HTTP request methods.

# Response Object

- The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.
  1. res.download() : Prompt a file to be downloaded.
  2. res.end() : End the response process.
  3. res.json() : Send a JSON Response.
  4. res.jsonp() : Send a JSON response with JSONP support.
  5. res.redirect() : Redirect a request.
  6. res.render() : Render a view template.
  7. res.send() : Send a response of various types.
  8. res.sendFile() : Send a file as an octet stream.
  9. res.sendStatus() : Set the response status code and send its string representation as the response body.

# CORS

- If we send a fetch request to another website, it will probably fail.
- Cross-origin requests are sent to another domain (even a subdomain) or protocol or port and require special headers from the remote side.
- That policy is called **"CORS": Cross-Origin Resource Sharing**.
- It is a mechanism to allow or restrict requested resources on a web server to be accessed from a different origin.
- This policy is used to secure a certain web server from access by other website or domain. For example, only the allowed domains will be able to access hosted files in a server such as a stylesheet, image, or a script.
- There is an HTTP header called origin in each HTTP request. It defines from where the domain request has originated. We can use header information to restrict or allow resources from our web server to protect them.

# Handling Form Data

- The web’s main function is communication.
- Basically, Express.js stores client data in two places:

1. **request.query** (for GET request)
2. **request.body** (for POST requests)

- On the client side, it is ideal to use the POST method for form submission because most browsers place limits on the length of the query and additional data is lost.
- request.body will not work without the body-parser middleware.
- When sending HTML files as a response to the browser, one may get the following error: _TypeError: path must be absolute or specify root to res.sendFile_ : > Solution : **res.sendFile(\_\_dirname +'/index.html');**

- Static files, like images, are files that clients download from the server. Static files, like images, are files that clients download from the server > Create a new directory, 'public' in your project structure > `app.use(express.static('public'));`

  - Express looks up the files relative to the static directory. So, the name of the static directory is not a part of the URL.
  - The root route is now set to your public directory. So, all the static files that you load will consider ‘public’ as root.

# Cookies

- Cookies are small text files that are sent by the server to the client as a piggy-backed attachment to the response.
- Cookies are stored on the client side in the browser memory. Every time the user loads the website back, that is, hits the URL, this cookie is sent with the request. This helps keep track of user’s actions.
- Every cookie object has an expiry time. It could range from as low as session\* time to a few years.

  - Session time means that the cookie would live till you work on the site. As soon as you close the browser, the cookie is destroyed and cleared from the browser memory.
  - **cookie-parser** is a middleware that parses cookies attached to the client request object.

- A signed cookie is simply a signature attached to the cookie.
- So, the cookie will still be visible to the client. However, it has a signature. So, the server side code can detect if the client modified the cookie or not.
- If the signature does not match, then it will give an error.

```js
// Syntax to create a cookie object
// cookies hold everything as key:value pairs
app.get("/", (req, res) => {
  res.cookie("edtech", "upgrad").send("cookie set"); //Sets edtech = upgrad
});
```

```js
// To check if the above cookie is set on the client side, that is, browser, run the following code:
console.log(document.cookie);
```

```js
//Creating cookies with expiration time.
//Just add property ‘expire’ along with the expiry time to the cookie
//For example,
//Expires after 360000 ms from the time it is set.
res.cookie(name, "upgrad", { expire: 360000 + Date.now() });
```

```js
//Another way to set expiration time is using ‘maxAge’ property. Using this property, you can provide relative time instead of absolute time
//This cookie also expires after 360000 ms from the time it is set.
res.cookie(name, "value", { maxAge: 360000 });
```

```js
// Deleting Existing Cookies
// To delete a cookie, use the clearCookie function
app.get("/clear_cookie_upgrad", function (req, res) {
  res.clearCookie("upgrad");
  res.send("cookie upgrad cleared");
});
```

```js
// To create a signed cookie code syntax, use the following code:
res.cookie("name", "value", { signed: true });

// Note: Instead of app.use(cookieParser()), use app.use(express.cookieParser(‘SomePrivateKey'));

// To access a signed cookie, use the signedCookies object of req (that is, request) object:
req.signedCookies["name"];
```

# Sessions

- HTTP is stateless; so, every request is unique. Although two or more consecutive requests could come in from the same client browser. So, in order to associate a request to any other request, you need a way to store user data between HTTP requests.
- Cookies and URL parameters are both suitable ways to exchange data between the client and the server. But, they are both readable and stored on the client side. You want something that can be stored and managed on the server side only. Sessions solve exactly this problem. You assign the client an ID and it makes all further requests using that ID. The information associated with the client is stored on the server linked to this ID.
- The session middleware handles all the things, that is, creating the session, setting the session cookie and creating the session object in request object.
- Whenever you make a request from the same client again, you will have their session information stored with you (given that the server was not restarted).

# Error Handling

- Error handling in Express.js is done by writing a regular middleware function.
- Error handling middleware is defined in the same way as other middleware functions, except that error-handling functions MUST have four arguments instead of three – **err, req, res and next**.
- For error handling, you use the next(err) function. A call to next(err) function skips all middlewares and matches you to the next error handler for that route. Let’s understand this through an example.

```js
var express = require("express");
var app = express();
app.get("/", function (req, res) {
  //Create an error object and pass it to the next function
  var err = new Error("dash-dash went wrong");
  next(err);
});
/*
 * other route handlers and middleware here
 */
//An error handling function or middleware
app.use(function (err, req, res, next) {
  res.status(500);
  res.send("dash-dash went wrong.");
});
app.listen(3000);
```

```js
// For example, to send a response on any error, you can use the following code:
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```
