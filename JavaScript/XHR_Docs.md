# Sending Data to Server using XMLHttpRequest

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

Value State Description
0 UNSENT XMLHttpRequest has been initiated, but the open() method has not been invoked.
1 OPENED The open() method has been invoked.
2 HEADERS_RECEIVED The send() method has been invoked, and the response headers and status are available.
3 LOADING The server is processing the request and is sending the response body. The received data is stored in XMLHttpRequest.responsetext.
4 DONE The data has been received, and the communication between the client and the server is complete. The result could be either a success or a failure.

You must wait till XMLHttpRequest.readyState === 4.

# HTTP Request Methods

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

# HTTP Response Status Code

HTTP response status codes are response codes predefined by a server when a client makes a request. These define what happened to the HTTP request made by the client.

HTTP response codes are three-digit numbers, with the first digit signifying one of the 5 predefined standard classes of response, as shown below.

_ X X >> First Digit _ Class of Response

1 > Informational : Indicates that the server has received the request and is processing it.
2 > Success : Indicates that the server has successfully processed the request.
3 > Redirection : Indicates that the server has redirected the request.
4 > Client Error : Indicates that the request made by the client has some error in it.
5 > Server Error : Indicates that there is some error in server and it can't process the request.

Here are some common HTTP response status codes:

100: Continue

200: OK

201: Created

301: Moved Permanently

400: Bad Request

404: Not Found

415: Media Type Not Supported

500: Internal Server Error

502: Bad Gateway

You must wait until the status code is 200.

415 is the error code for 'Media Type Not Supported'. When you transfer some data from an application over the web, the data needs to be sent in a fixed format so that the receiver knows how to read and interpret the data.
It is similar to sending data to someone in a box, so the data does not get changed. However, you need to send the key to the box, so the person can open it and access the data. The definition of the encoding is the key so that the box of data can be opened.

# HTTP Headers

Do you remember the HTTP response status code 415 that you came across in the previous segment? As you can recall, error 415 indicates that the media type is not supported. This happens when you do not specify what format you are sending the data in. You are sending the JSON object from the client to the server, and the server is receiving this data, but the server is not aware of its format. You need to specify the format of this data explicitly. So, how can you specify the format? Well, you can do this with the help of headers.

Clients and servers use HTTP headers to pass additional information to each other.

These headers are broadly classified into the following four categories:

1. General headers

The client and the server can use these, but they do not give any information about the content sent by the client or the server. Common examples are 'Date', 'Cache-Control' and 'Connection'.

2. Request headers

The headers sent by the client (browser) to the server are known as 'request headers'. These headers share with the server more information about the client (the version of software the client is using, the encoding type of response data that the client can accept) and information about the resource that the client is trying to request.

3. Response headers

The headers sent by the server to the client are known as 'response headers'. They contain more information about the content being served to the client or about the server itself (the number of API calls that the server will make, the amount of time that it will sustain a session for, etc.).

4. Entity headers

The headers that give more information about the content of the body of a message are known as 'entity headers'. These can be used in requests as well as responses.

In the video above, you learnt how to use the setRequestHeader method on the XMLHttpRequest object to set the value for a header sent along with the request. This method must be used after the open() method has been invoked and before the send() method has been invoked.

Syntax:
XMLHttpRequest.setRequestHeader(header, value);

You also looked at the Content-Type header, one of the entity-headers that we used along with the request. You can read more about this header from this link.

For a JSON object, the correct format is 'application/json' with the default encoding format (charset) as UTF-8, as shown below.
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

Note that the setRequestHeader() method can be used multiple times in the code to set the values of different headers to be sent along with the request.

# Debugging the Code

Some simple steps to keep in mind while debugging are as follows:

Know the HTTP response status codes well. Some status codes occur quite often, and knowing them saves time.

Understand the flow of data in your code.

Keep a logical flow in your program and follow proper design patterns.

Take care of the syntax and semantics of the language(s) used.

Google any error that you are unable to resolve. Almost 90% of them can be found on StackOverflow or other community forums.

**Example Debug :-**

Debugging With HTTP Response Status Codes
Assume that you are making a PUT request. While making a call to input new employee details, you get the HTTP response status code 404. After some debugging, you are able to change the HTTP response status code to 415. As this is still an error code, you conduct some more debugging, and you are finally able to achieve the HTTP response status code 201.

Next, you make a POST request containing details of the employee to the same API endpoint and you end up receiving the HTTP response status code 200.

Can you explain what might have happened for each of the status codes that you have received in the given scenario?

Some of the HTTP response codes we received are as follows:

404: Not Found

This is because the PUT request was addressed to the wrong URL.

415: Media Not Supported

You did not set the correct headers and the server was not able to read the data because it was not able to decode it.

201: Created Successfully

You were able to provide correct headers, and you registered the data for the first time successfully.

200: OK

You made a POST call with some more information, most probably to update some information. The POST call returned a success message and hence you received the response status code 200, successfully updating the information.

# Making an AJAX Call Secure

Important and private information such as passwords and credit card details should not be transferred using plain text. Specifically, a malicious party can intercept the HTTP calls bya malicious party can intercept the HTTP calls by listening to the data transfer between you and the server. If the data is sent using plain text and is intercepted, your confidential data will be visible to malicious hackers.

Suppose, you send your email and password using plain text while logging in to Facebook. Now, a hacker who may be intercepting your data can easily view your credentials and thus may take advantage of your account. To avoid this, you need to use a secure mechanism to transfer data from the client to the server. Let’s watch the next video to learn how to do this.

In the video above, you looked at authorization, a header that informs the server about the type of encoding that the client uses to encode the plain text before sending it to the server.

You also looked at the basic form of authorization: the Basic Authorization. You can use the window.btoa() method for encoding plain text data. This method returns a base64 encoded string. To provide multiple string values to be encoded simultaneously, you can separate them using a colon.

Syntax:

window.btoa(value1:value2:valueN);

You can read more about Base64 Encoding and Decoding by referring to this link. You can follow this link for more information on the window.btoa() method.

To set the Authorization header in the request using the Basic Authorization technique, you can use the setRequestHeader() method again with the encoded value that you obtained using the Base64 Encoding via the window.btoa() method.

xhr.setRequestHeader('Authorization', base64EncodedString);

# Authorization and Access Token

After logging in to a server, you will perform some tasks, for which you will make some API calls. But how will those API calls be validated? Let's consider the example of Facebook. You cannot use any functionality of the Facebook application unless you successfully log in to the application. So, the server must know that the user has already been authenticated to grant them access to the functionalities of a registered user.

After you have logged in, you will need an 'access token' to make any subsequent API call to the server.

An Access Token forms an essential part of any web application, as it is your token to access the APIs provided by the website after logging in. So, many companies take special measures to make their access tokens as random as possible so as not to be vulnerable to malicious intent.

An access token is a way to inform the server that the API call made to the server is by a user who has already logged in. The server ensures that it creates a unique string and sends it to the user after they log in. This unique string is known as the access token, and for every API call after the login, this string is mandatory for the server to validate the subsequent API calls.

Access tokens are generated by the server using a secure algorithm. This token is then stored against the user's credentials in a secure database by the server. Next, this token is transferred to the user and then becomes the user's 'ticket' to use the APIs provided by the server.
Access Token
Suppose you have to log a user in with the username and password. You are asked to generate a token for them. A common method that you saw in the video is to take the username and password and then encrypt it because the chances of them matching with any other user is quite rare. So, the access token generated has a very high probability of being unique.

Considering you are asked to replace the username with some other field such that the combination of them is unique, which of the following additional variables from the given options will you use?

The email ID of a user

✓ Correct
Feedback:
The email ID of a person is unique. In fact, in some applications, email IDs serve the purpose of making usernames unique. No two people can have the same email ID. This is the correct option. Since the email ID of a person alone can be unique for each user, when it is combined with the unique username and password, it brings in more uniqueness.

# Example for Access Token

Suppose you have to log a user in with the username and password. You are asked to generate a token for them. A common method that you saw in the video is to take the username and password and then encrypt it because the chances of them matching with any other user is quite rare. So, the access token generated has a very high probability of being unique.

Considering you are asked to replace the username with some other field such that the combination of them is unique, which of the following additional variables from the given options will you use?

The email ID of a user

✓ Correct
Feedback:
The email ID of a person is unique. In fact, in some applications, email IDs serve the purpose of making usernames unique. No two people can have the same email ID. This is the correct option. Since the email ID of a person alone can be unique for each user, when it is combined with the unique username and password, it brings in more uniqueness.

An important and interesting point to keep in mind is that the access token has to be generated randomly.

# Access Token Continuation

There is no standard practice for generating access tokens. Each company randomly generates them, and the details of how they are generated are very closely guarded.

Some companies use the user ID and subsequent information (e.g., the timestamp of creation) to generate an access token after encoding them, whereas others use random strings.

These methods have their pros and cons. A random string as an access token is much more secure than an access token generated by encoding the user information. There is no inherent order in generating the string; hence, no data can be inferred.

On the other hand, retrieving data for a random string takes much more time than for a string that encoding data sent by the user has generated. This is because the database has to traverse through all the data to check if the string matches a user.
You can refer to this link to read more about how tokens are generated.

After obtaining the access token, you need to store it to use it to make API calls in the future. In the next session, you will learn how to use the browser's storage space to store useful information.

# Session Storage

In the previous session, you saw how the server sent an access token along with the successful login. This access token acts as a 'ticket' for a user to access other APIs provided by the server to a registered user. However, we need to store this access token somewhere to reuse it for future API calls. This means that every time you are logged in, you need to store the access token somewhere on the client-side to determine if the user is already logged in. In the next video, you will learn about the different ways of storing the access token on the client-side.

Before HTML5, storage on the web was available in cookies. According to MDN, an HTTP cookie is a small piece of data that a server sends to the user’s browser (client). The browser may store this cookie and send it back inside the HTTP header of the next request to the same server. Typically, it is used to determine if the two requests came from the same browser. Thus, when the user visits a web page next time, the server extracts the cookies from the HTTP header and recognises the user with the data that came along with the request.

The limitation with cookies is their size; they are limited to 4,096 bytes. This severely reduces the amount of data you can store on the client-side. Also, cookies are to be sent in the header with each HTTP request. This wastes bandwidth and thus worsens performance, especially on mobile network connections.

This is why HTML5 introduced two new storage options in the browser: Session Storage and Local Storage. These generally provide memory storage of at least 5 MB, which is a huge jump from the cookie’s 4 KB.

As the name suggests, session storage only persists until the session remains active, i.e., the data stored in the session storage remains in the memory only until the browser tab remains open. On the other hand, the data stored in the local storage remains in the memory until it is explicitly deleted by clearing the browser's cache or instructing the browser to clear local storage.

The differences between the three types of browser storage options available are summarised in the table below.

**Cookie**

> Memory : 4 KB
> Persistence (Lifetime of data) : Unlimited unless explicitly deleted
> Access : Can be accessed by both the server and the client; can be programmed only server-access
> Preferred usage : For storing sensitive data of the server/client

**Session Storage**

> Memory : At least 5 MB
> Persistence (Lifetime of data) : Stores the value till the browser's tab remains open
> Access : It can be accessed only by the client
> Preferred usage : For storing values that only need to persist for the duration of a tab
> Example: Score in a game

**Local Storage**

> Memory : At least 5 MB
> Persistence (Lifetime of data) : Unlimited unless explicitly deleted by clearing cache or clearing local storage
> Access : It can be accessed only by the client
> Preferred usage : For storing values that require persistence unless explicitly stated otherwise
> Example: Logged-in state of a user

# Storing Credentials in Browser

Facebook and Gmail do not ask for your login credentials if you click on ‘Remember Me’ the first time you log in.

This happens because they store some information to validate you on your browser. Where exactly do you think would your validating information be stored in your browser?

**Cookies**

✓ Correct
Feedback:
When a user logs in, a random string is generated, and this string is stored as a validation for the user in the server database. When a user clicks on 'Remember Me', the server sends this string in a cookie and programs this cookie such that it can be accessed only by the server. So, when the user opens the website again, the server just looks for this cookie and allows the user to bypass the login process.

_Local Storage_

_✕ Incorrect_

Feedback:
When a user logs in, a random string is generated, and this string is stored as a validation for the user in the server database. When a user clicks on 'Remember Me', the server sends this string so that it can be stored in the browser. The problem with session storage is that it is accessible by any user on the system and is set on the system's client side and as such poses a grave security threat because it can be accessed by the client. Client-side access means that any application on the client system can access the data. So, this string can get stolen by any malicious software and can be used by this application to gain access to the server as a user.

Also, the value will not persist after the tab or window is closed, rendering the entire point useless.

**Session storage** is part of the storage APIs provided by browsers. An interesting thing about session storage is that it has the unique property of persisting in the memory for the duration of the session. Thus, the data stored in session storage is available as long as the browser tab remains open. This particular property makes session storage perfect for applications where you need a value to persist throughout the application (for example, items in your cart in Amazon) or the server's access token.

Using session storage, such data tend to be too large to be stored in a cookie. For example, sending multiple cookies for the items with all their details in your shopping cart might cause problems in the data even if a single cookie goes missing, thereby corrupting the whole data. Local storage should not be used for such use cases because it is mainly used to persist data in the memory, and such data should not stay in the memory for more time than required. For example, you need to store the data inside your cart only until you make the payment. You can also use local storage and manually clear the data when the session is over (tab is closed), but storing such data for a long time will quickly fill up the local storage.

# window Object

The window object is the global object for a browser that provides it with the capabilities of the browser's window. Any variable or function defined globally is said to be a property/method of the window object.

An example of this can be found in the following code snippet:

var carCompany = "maserati";
console.log(window.carCompany);

Output: "maserati"

In the code snippet above, carCompany is defined at a global level and hence becomes a property of the window object. Thus, the variable carCompany is accessed over the window object in the console.log() method.

Some common methods and properties provided by the window object are as follows:

**window.innerHeight**: This property provides the height (in pixels) of the viewport of the browser's window.
**window.open()**: This method opens a new browser window with the given URL.
**window.scrollTo()**: This method scrolls to a particular set of coordinates on the browser's window.
**window.location**: This property provides the current location/URL of the browser's window.

**window.location.href** is synonymous to using window.location.

**Impact of Resizing Browser Window on window.innerHeight :**
The window object is a global object and represents the current window in the browser. Also, window.innerHeight shows the inner height of the browser's window.
Suppose window.innerHeight is 250px when the browser's window is fullscreen.
What do you think will happen to window.innerHeight if the browser's height is changed?

The window object represents the current window in the browser. Resizing the height of the browser's window would resize the window currently open. This would cause window.innerHeight to change as the inner height will decrease in size.

This property is quite helpful when you want a responsive design on your web page. Getting the current inner height will enable you to adjust your CSS accordingly so that the web page looks the way you want on every device.

# Navigating to a Home Page

In JavaScript, **redirection and navigation** are provided through two methods, the window.location property and the window.open() method, which can be summarised as follows:

**window.location / window.location.href opens a new web page in the same tab.**
**window.open() opens a web page in a new tab or window.**

If you want to redirect the page to the Google home page using the window.location.href property, you need to provide the complete address of the web page, i.e., https://www.google.com, and not just write the URL www.google.com.
**window.location.href = 'https://www.google.com';**
**window.location.href = './home.html';** >> For Reirecting back to the Home Page
This is because www.google.com is a relative link, and the window.location.href property will append relative links (www.google.com) at the end of the current page URL address.

On the other hand, https://www.google.com is an absolute address, which informs window.location.href to go to that address instead of appending it to the current page URL address.

**Values stored in session storage cannot be accessed across different browser tabs. Session storage persists for that particular tab only; hence, it will not be available to the new tab**

# Retrieving data stored in session storage

We retrieved the access token from session storage and used it in the Authorization header to dynamically get data for the front end. The following method can be used to access session storage:

sessionStorage.getItem(‘key’).

Here, key refers to the key name in the key-value pair.

We used it in the code to get the access token from session storage using the following:
var access = sessionStorage.getItem('access-token');

Next, we made a GET request to the back end and used the access token retrieved from session storage as an authentication header to access the data successfully.

# API Calls in a For Loop

Making all the API calls in a for loop is a bit problematic due to security reasons. The browser thinks of multiple API calls arising from the same source as an application trying to slow down its performance by inundating it with many calls, which is quite similar to spamming a system. This is why a browser will block any such call.

# Event-Driven API calls

Event Example = "onClick".

Event-Driven API calss form the backbone of modern JavaScript. Getting all the data for a particular web page in a single API call causes the web page to load slowly.

Imagine Facebook loading all the data to appear on your home screen in a single go. This means all the posts and all the comments on the posts would be downloaded regardless of whether you want to read them or not.

In this case, the amount of data consumed would be quite significant, and the page would take a lot of time to load if the internet speed is insufficient.

Event-driven API calls are a solution because they fetch data only when required, thereby making the page load faster due to low data consumption.

# Event-Bubbling

Event bubbling occurs when there are nested elements. The idea is that if one element is nested inside another, like in our example where delete-btn and project-btn were nested inside div ( <div id = value.id>), their events get linked.

Both the buttons and the div have some onClick property attached to them.
This causes a problem when the inner event is triggered, i.e., when the onClick button of the nested button (delete -btn) is clicked on. This causes the onClick property of the div to be activated too.

This happens because the div is the parent container of the button, and in DOM, if you click on the button, you are selecting the div too.

This bubbling of events (for example, the onClick of the child triggering the onClick of the parent) is called event bubbling.

The solution to such an event bubbling is to have a function that can limit the bubbling when this function is defined.

Such a function already exists and is known as event.stopPropagation. This function causes the triggering to stop when this is defined.

In the example project management app, we stated event.stopPropagation in the function called on the clicking of the Delete button. This would mean that when deleteBoard() is called, the first thing it does is - stop the event onClick and limit the effect of the click.

# User Permission

Handling permissions is done at two levels: front end and back end. Front-end permission handling means that the user will not get access to the User Interface of the website if they lack permissions and will not make API calls to get the required.

However, this is done in conjunction with back-end permission checking in the industry, where the server does not send any data if the permissions are incorrect.