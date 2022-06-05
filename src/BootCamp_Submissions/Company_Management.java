/* 
To Demonstrate Inheritance :
Create a class named 'Member' having the following members: 
Data members
1- Name
2 - Age
3 - Phone number
4- Address
5 - Salary
It also has a method named 'printSalary' which prints the salary of the members.
Two classes 'Employee' and 'Manager' inherits the 'Member' class. 
The 'Employee' and 'Manager' classes have data members 'specialization' and 'department' respectively. 
Now, assign name, age, phone number, address and salary to an employee and a manager by making an object of both of these classes and print the same. 
*/
package BootCamp_Submissions;

class Member{
    String name;
    int age;
    int phoneNumber;
    String address;
    double salary;

    void printSalary(){
        System.out.println("Salary : "+this.salary);
    }
}

class Employee extends Member{
    String specialization;
}

class Manager extends Member{
    String department;
}

public class Company_Management {
    public static void main(String[] args) {
        Employee e = new Employee();
        e.name = "Employee";
        e.age = 25;
        e.phoneNumber = 990;
        e.address = "Gujarat";
        e.salary = 100000;

        e.printSalary();
        // OR
        System.out.println("Salary of Employee : "+e.salary);

        Manager m = new Manager();
        m.name = "Manager";
        m.age = 25;
        m.phoneNumber = 990;
        m.address = "Gujarat";
        m.salary = 1000000;

        m.printSalary();
        // OR
        System.out.println("Salary of Manager : "+m.salary);
    }
}
