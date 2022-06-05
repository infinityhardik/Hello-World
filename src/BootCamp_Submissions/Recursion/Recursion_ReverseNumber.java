package BootCamp_Submissions.Recursion;
import java.util.Scanner;

public class Recursion_ReverseNumber{
    // Used Static Method >> so that we don't need to create object of the Class for implementation of the method.
    public static void reverseNumber(int number)   
    {  
        if (number < 10)   
        {  
            //prints the same number if the number is less than 10  
            System.out.println(number);  
            return;  
        }  
        else   
        {  
            System.out.print(number % 10);  
            reverseNumber(number/10);  
        }  
    }  
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter a Number :");
        int n = in.nextInt();
        System.out.println("Reverse of Number : ");
        reverseNumber(n);
        in.close();
    }
}