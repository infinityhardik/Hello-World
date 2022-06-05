/* 
We have to calculate the percentage of marks obtained in three subjects (each out of 100) 
by student A and in four subjects (each out of 100) by student B. Create an abstract class 'Marks' 
with an abstract method 'getPercentage'. It is inherited by two other classes 'A' and 'B' each having a method 
with the same name which returns the percentage of the students. The constructor of student A takes the marks in
three subjects as its parameters and the marks in four subjects as its parameters for student B. 
Create an object for each of the two classes and print the percentage of marks for both the students.
*/
package BootCamp_Submissions;

public class Percentage_Abstraction {
    public static void main(String[] args) {
        A a = new A(80, 90, 100);
        B b = new B(80, 90, 70, 60);
        System.out.println("Student A Percentage : "+a.getPercentage());
        System.out.println("Student B Percentage : "+b.getPercentage());
    }
}

abstract class Marks{
    abstract float getPercentage();
} 

class A extends Marks{
    float marks1, marks2, marks3;
    A(float marks1, float marks2, float marks3){
        this.marks1= marks1;
        this.marks2= marks2;
        this.marks3= marks3;
    }
    float getPercentage(){
        return ((marks1+marks2+marks3)/300)*100;
    }
}
class B extends Marks{
    float marks1, marks2, marks3, marks4;
    B(float marks1, float marks2, float marks3, float marks4){
        this.marks1= marks1;
        this.marks2= marks2;
        this.marks3= marks3;
        this.marks4= marks4;
    }
    float getPercentage(){
        return ((marks1+marks2+marks3+marks4)/400)*100;
    }
}

/* Solved by Hardik Bhaavani */