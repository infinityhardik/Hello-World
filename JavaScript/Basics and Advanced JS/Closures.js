var generateID = function() {
    // TODO 1: Declare & initialize variable named prefix with value "uid-"
    var prefix = "uid-"
    // TODO 2: Declare & initialize variable named count with value 0
    var count = 0;
    // TODO 3: return function which increments the count and returns the id formed with concatenating prefix and count
    return function(){
        count++;
        return prefix+count;
    }
}

// calling the generateID() and then storing the returned function inside the variable named create
var create = generateID();
// calling the create function thrice
console.log(create());
console.log(create());
console.log(create());