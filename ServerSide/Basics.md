- JavaScript can be used on the client-side as well as on the server-side.
- Node.js is a JavaScript runtime built on a V8 JavaScript engine.
- The Just-In-Time compilation technique converts JavaScript code directly into binary form. Using the Just-In-Time (JIT) compilation technique, the JavaScript code gets directly compiled into the low-level machine code, which is in the binary form. This low-level machine code can be directly run on the machine without it being interpreted, thereby eliminating the need for an interpreter, and no intermediate code is generated. Thus, this is one of the correct options.
- **DOM (Document Object Model) manipulation can be achieved using the client-side JavaScript language only.**Manipulating the DOM first requires the DOM (Document Object Model), which needs to be rendered on the client (browser). Thus, this can be achieved using the client-side JavaScript language.
- **Local file system management can be achieved using the Node.js language only.** The management of the local file system requires you to interact with the file system locally. This cannot be done on the client-side due to security reasons. This is why it is done on the server-side using the Node.js language.
- Thus, DOM cannot be managed using Node.js and Local File System cannot be managed by the client-side JavaScript language.
- Node.js uses non-blocking I/O and event-driven architecture. Node.js is built for extensive I/O operations that can be handled in a non-blocking manner or, we can say that it handles requests asynchronously.
- Node.js is capable of serving multiple concurrent events in a single thread. Node.js supports concurrency in a single thread using an event queue to monitor all the requests.
- The require keyword is used to import a module, for example, var fs = require('fs');

# Folder Structure

- The **package.json** file is the file that is created when we create a new project in node.js, which has all the project configuration details and also keeps on getting updated as we install new external dependencies into our application. The package.json file is the file that is created when we create a new project in node.js, which has all the project configuration details and also keeps on getting updated as we install new external dependencies into our application.
- The **node_modules** folder contains the source code of the external modules js or library files that we install and use in our application.