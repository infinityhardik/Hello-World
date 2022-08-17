class Person {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
}

class Employee extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    
    getID() {
        return this.id;
    }
}

let emp = new Employee("Srishti", "E101");
console.log(emp.getName(), emp.getID());


/* 
Here, you have declared a class named Person, 
which contains a constructor that takes in the name as an argument 
and add the value of the name inside a variable called name. 
Thus, when an instance of the Person class is created, 
this.name refers to the name assigned to the instance (object) of the Person class. 
Then, there is a function called getName(). 
This function acts as a getter function to get the value contained 
inside the variable name of the instance (object) of the Person class.



Then, a class named Employee is defined which inherits from the Person class. 
Thus, the Employee class will also have the name variable (referenced using this.name) 
and a function named getName() which returns the value of this.name where 
this refers to the instance (object) of the Employee class. Inside the Employee class, 
there is a constructor which takes in two arguments - name and id. 
The name is passed to the super() method, 
thus passing the argument name to the constructor of the parent class, 
which is the Person class in this case. On the next statement, the id, 
passed as an argument to the constructor, is added to a variable called id, 
which is added to the Employee class. Inside the Employee class, there is a function named getID. 
This function acts as a getter function to get the value contained inside the 
variable id of the instance of the Employee class.



Now, when an instance of the Employee class is created named emp, 
the values passed to the constructor of the Employee class are “Srishti” and “E101” 
as the arguments corresponding to the name and id respectively and thus setting these 
variables for the emp instance. 
Now, when the emp.getName() and the emp.getID() functions are called, 
the values for the name and id are returned, which are “Srishti” and “E101” respectively.
*/