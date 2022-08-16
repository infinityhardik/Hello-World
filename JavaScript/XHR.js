// Instantiating new XMLHttpRequest using Constructor
// Define XHR Request at a Global Level so that all of the functions can have access to this Request.
// The same XHR request can be used multiple times in a Big Application where multiple AJAX Calls need to be made.

// It is not necessary to instantiate XMLHttpRequest again and again for the same.
// We can reuse this XMLHttpRequest in multiple functions and then send multiple API calls to the Backend.

var xhr = new XMLHttpRequest();

xhr.open('POST', 'https://reqres.in/api/users');

// Send the JSON Data as a parameter to send() method
xhr.send();

// Callback function invoked onreadystatechange

xhr.onreadystatechange = function () {
   if(xhr.readyState === 4) {
       console.log("Hi, I'm here.");
       console.log(xhr.responseText);
   }
}

// XML Http Request using Fake Rest API website.