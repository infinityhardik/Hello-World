package BootCamp_Submissions.Recursion;
import java.util.Scanner;

public class Recursion_Factorial{
    // Used Static Method >> so that we don't need to create object of the Class for implementation of the method.
    public static int fact(int n){
        if(n!=0){
            return n*fact(n-1);
        } else {
            return 1;
        }        
    }
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter a Positive Number :");
        System.out.println("Factorial of Number : "+fact(in.nextInt()));
        in.close();
    }
}