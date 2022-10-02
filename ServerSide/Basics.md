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
