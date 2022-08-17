const mergeStudents = (classA, classB) => {
  /* TODO 1: Create a variable with identifier mergedClass
    Variable mergedClass must contain the classA's students, then two students "Emily" and "Frank", and then class B's students 
    */
  var mergedClass = [...classA, "Emily", "Frank", ...classB];
  // TODO 2: Print the variable mergedClass on the console
  console.log(mergedClass);
};

// arrays containing names of students in two classes
const classA = ["Alice", "Bob", "Catherine", "Dan"];
const classB = ["George", "Jane", "Katy", "Luis"];

mergeStudents(classA, classB);



// Spreading the Arguments over a Function

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));