/*
1. There is a function called "status" in update object which has "str" parameter, You'll have to print that status to console in following format:
	"Status: " + str

2. There is a function called "error" in update object which has "err" parameter, You'll have to print that error to console in following format:
	"Error: " + err

3. Export update object from updator.js
*/
const update = {
  status: function (str) {
    console.log("Status: " + str);
  },
  error: function (err) {
    console.log("Error: " + err);
  },
};

exports.update = update;
