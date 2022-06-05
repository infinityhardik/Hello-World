/*
Inheritance is used in Software Development for Upgradation of New Components/Features/Properties so that one need not modify pre-existing code lines for new functionality.

Create a class with a method that prints "This is parent class" and its subclass with another method 
that prints "This is child class". Now, create an object for each of the class and call :
1 - method of parent class by object of parent class
2 - method of child class by object of child class
3 - method of parent class by object of child class 
*/
package BootCamp_Submissions;

class ParentClass {
    public void parentMethod(){ System.out.println("This is Parent class"); }
}
class ChildClass extends ParentClass{ 
    public void childMethod(){ System.out.println("This is Child class"); }
}
public class Inheritance_Demonstration {
    public static void main(String args[]) {
        ParentClass parent = new ParentClass();
        ChildClass child = new ChildClass();
        
        // method of Parent class by object of Parent class
        parent.parentMethod();

        // method of Child class by object of Child class
        child.childMethod();
        
        // method of Parent class by object of Child class cc.pmethod();
        child.parentMethod();

        // method of Child class by object of Parent class cannot be accessed i.e., parent.childMethod() not possible
        // Hence Parent cannot access Child Behaviour or Properties.

    }
}
