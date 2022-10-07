/*
1. There is a function in index.js file called "sayHello" which has "name" as a parameter.
2. Now you have to print that name in following format in same function.
	"Hello, " + name

For Example: 

if I call sayHello("Captain");

Output: "Hello, Captain"

After completing function call that function 3 times with you're favourite Avenger's name
*/


function sayHello(name) {
  console.log("Hello, " + name);
}

sayHello("Iron Man");
sayHello("Captain America");
sayHello("Thanos");

// Don't change below code
module.exports = sayHello;
