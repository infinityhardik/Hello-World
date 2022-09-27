/*
1. Import update with same name in index.js file
*/
const { update } = require("./updator");

// Don't change below code
function checkStatus() {
  if (5 < 4) {
    update.status("Yes! 5 is less than 4");
  } else {
    update.error("Something is wrong!");
  }

  if (4 === 4) {
    update.status("Good guess!");
  }
}

checkStatus();
module.exports = checkStatus;
