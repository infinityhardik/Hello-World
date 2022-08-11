/* 
TODO 1: Create a class named Shape.
The class Shape must have a constructor which sets the property numberOfSides to the value passed as an argument to the constructor.
*/
class Shape{
    constructor(numberOfSides){
        this.numberOfSides = numberOfSides;
    }
}

/*
TODO 2: Create a class named Circle.
The class Circle must inherit the class Shape.
The class Circle must have a constructor which passes 0 as the value to the parent constructor as the argument for the numberOfSides.
The constructor must also set the property radius to the value passed as an argument to it.
*/

class Circle extends Shape{
    constructor(radius){
        super(0);
        this.radius = radius;
    }
}


/*
TODO 3: Create a class named Rectangle.
The class Rectangle must inherit the class Shape.
The class Rectangle must have a constructor which passes 4 s the value to the parent constructor as the argument for the numberOfSides.
The constructor must also set the property length and breadth to the values passed as arguments to it.
*/

class Rectangle extends Shape{
    constructor(length, breadth){
        super(4);
        this.length = length;
        this.breadth = breadth;
    }
}


// TODO 4: Instantiate the Circle class while passing the radius as argument with the value 3
var c = new Circle(3);

// TODO 5: Print the value of the property radius on the instance of the Circle class
console.log("Radius = "+c.radius);

// TODO 6: Instantiate the Rectangle class while passing the length and breadth as arguments with the values 1 and 2 respectively
var r = new Rectangle(1,2);

// TODO 7: Print the value of the properties length and breadth on the instance of the Rectangle class
console.log("Length = "+r.length+", Breadth = "+ r.breadth);

console.log("Number of Sides in a Circle = "+c.numberOfSides);
console.log("Number of Sides in a Rectangle = "+r.numberOfSides);
