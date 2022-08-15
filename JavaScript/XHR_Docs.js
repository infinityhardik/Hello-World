/* 
Sending Data to Server using XMLHttpRequest


XMLHttpRequest is sometimes called XHR in short. You can instantiate XMLHttpRequest using the new operator as follows:

var xhr = new XMLHttpRequest();
 

The following methods can be invoked on an XMLHttpRequest object:

XMLHttpRequest.open()
This event handler initialises a request to the server.

 

Syntax:

XMLHttpRequest.open(method, url, async, user, password);
 

Since you have already initialised the XMLHttpRequest object, we can open its connection. Thus, you can write the following syntax:

xhr.open(method, url, async, user, password);
 

The first two parameters in the syntax above are required and cannot be left blank. The next three are optional. Let's discuss all these parameters one by one.

 

method: This is a required parameter. It defines the HTTP request method (such as GET, POST, PUT and DELETE) that you will use to interact with the server. You will learn more about them in the next segment.

 

url: This is a required parameter. It is the URL address of the request.

 

async: This is an optional parameter. It is a boolean, and its default value is true. When the script sends a request to the server, it does not wait for the response; instead, it continues with its execution. Once the response is received, the event handler is invoked. You will learn about asynchronous programming in JavaScript in the module on Advanced JavaScript. If the value for this attribute is false, the request is not returned until the response is received.

 

user: This is an optional parameter. If the resource you are trying to access requires a username, this is the parameter you need to specify. It is used for authentication. The default value is null.

 

password: This is an optional parameter. If the resource you are trying to access has a password, it will be input here. This is also used for authentication, and the default value of this parameter is also null.

 

You can read more about the open() method by referring to this link.

 

XMLHttpRequest.send()
This event handler sends a request to the server. The default way of sending the request is asynchronous. As soon as the request is sent, the control from this method is returned.

 

Syntax:

XMLHttpRequest.send(body);
 

Since you have already initialised the XMLHttpRequest object, we can send the request using that object by writing the following:

xhr.send(body);
 

The parameter named body is optional. It is the body of the data being sent. The body can be formed from data or a data file. If nothing is mentioned, its value is considered to be null.

 

You can read more about the send() method by referring to this link.

 

onreadystatechange
onreadystatechange is an important property of an XMLHttpRequest object.

 

Syntax:

XMLHttpRequest.onreadystatechange = callback;
 

This property consists of the event handler, invoked when the readystatechange event occurs. The readystatechange event is dependent on a change in readyState property.

 

A callback is a function that defines the event handler. Whenever there is a change in the readyState property, the event handler defined as the callback function is invoked. 

 

You can read more about onreadystatechange by referring to this link.

 

readyState
Since you already know that the onreadystatechange property listens for a change in the readySate property, let's now discuss the readySate property.

 

The readyState property defines the state in which XMLHttpRequest is currently in. It takes a number value from 0 to 4. The table below consists of all the states of an XMLHttpRequest object.

 

Value	State	Description
0	UNSENT	XMLHttpRequest has been initiated, but the open() method has not been invoked.
1	OPENED	The open() method has been invoked.
2	HEADERS_RECEIVED	The send() method has been invoked, and the response headers and status are available.
3	LOADING	The server is processing the request and is sending the response body. The received data is stored in XMLHttpRequest.responsetext.
4	DONE	The data has been received, and the communication between the client and the server is complete. The result could be either a success or a failure.
 

You must wait till XMLHttpRequest.readyState === 4.  

*/




/* 
HTTP Request Methods
In the previous segment, you sent data to the server using the POST method, one of the few HTTP methods. This segment will revisit the different HTTP request methods used to inform the server to act.

 

HTTP request methods are used to request an action that you want the server to perform on the given URL address. For example, when you perform a Google search (intended action), Google sends your search parameter to its server using the GET HTTP request. Next, the server uses the search query to find the search results (resource), and these results (response data) are then sent back to you.

 

An HTTP request method contains a message head and a message body. The head consists of the URL and the headers, whereas the body consists of the information to be sent. In this segment, we will discuss the following HTTP request methods:

GET

POST

PUT

DELETE

 

Let’s discuss them one by one.

 

GET
The GET method is used to request a particular resource from a server. The response could be any data ranging from a CSS file to a JSON object.

A GET request does not have a message body; the information is sent through the message head. This makes the GET request special. It is excellent for requests that are supposed to optionally send information to a server and receive an output based on this information.

 

The GET request is similar to the read operation you perform in a database.

 

Here are some examples of a GET request:

Search queries

Fetching a specific file from a server

For example, when you enter the name of a country in a form, a list of cities in that country automatically appears. In this case, when you choose a country, a GET request is sent to the server, asking it to send you a list of cities in that particular country.

 

The XMLHttpRequest of a GET request would look like this:

 

Syntax:

xhr.open('GET', url);
xhr.send();
 

POST
As the name suggests, POST requests post data to a given URL. They can be used to make the server store an entry, such as the data you fill in the sign-up form on a website or the open-text answers you write on our platform; these are all sent to the server in a POST request.

A POST request has a message body in addition to a message head. The body carries the message, a JSON object or even a file.

 

The POST method is similar to the create operation you perform in a database. The information you send through a POST request is neither stored in the browser nor is the POST request cached. This makes it more desirable for sending sensitive information such as passwords or financial information. The information is stored after following proper encryption mechanisms.

 

The XMLHttpRequest of a POST request would look like this:

 

Syntax:

xhr.open('POST', url);
xhr.send(dataToSend); // dataToSend is the data to be sent to the server
 

PUT
The PUT request is a special request, as it performs a function similar to a POST call. However, this raises the following question: Why do you need a PUT call? PUT calls are idempotent. PUT calls instruct the server to delete the existing resource and put the resource sent in the PUT request there. This is important in cases where you do not want any data to overlap. PUT calls are similar to the update operation in a database. Whenever you need to update some data, you use a PUT request.

 

The XMLHttpRequest of a PUT request would look like this:

 

Syntax:

xhr.open('PUT', url);
xhr.send(dataToSend); // dataToSend is the data to be sent to the server
 

DELETE
As the name suggests, a DELETE request asks the server to delete some data from the given URL. A DELETE request, much like a GET request, does not contain any message body.

A DELETE request is quite similar to the Delete operation in a database.

 

The XMLHttpRequest of a DELETE request would look like this:

 

Syntax:

xhr.open('DELETE', url);
xhr.send(dataToSend); // dataToSend is the data to be sent to the server
*/