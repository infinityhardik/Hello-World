// Instantiating new XMLHttpRequest using Constructor
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