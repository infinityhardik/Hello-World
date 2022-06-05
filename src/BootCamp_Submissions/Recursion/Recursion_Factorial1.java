/* Write a program to print the factorial of a number by defining a method named 'Factorial'.
Factorial of any number n is represented by n! and is equal to 1*2*3*....*(n-1)*n. E.g.-
4! = 1*2*3*4 = 24
3! = 3*2*1 = 6
2! = 2*1 = 2
Also,
1! = 1
0! = 1 */
package BootCamp_Submissions.Recursion;
import java.util.Scanner;

public class Recursion_Factorial1{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Factorial of Number");
        System.out.println("Enter a Number :");
        int n = in.nextInt();
        System.out.println(n+" Factorial is "+factorial(n));
        in.close();
    }
    
    public static int factorial(int n){
        // Using Recursion for Factorial Calculation 
        if(n==0){
            return 1;
        } else if (n==1) {
            return 1;
        } else {
            return n*factorial(n-1);
        }
    }
}
/* Solved by Hardik Bhaavani */