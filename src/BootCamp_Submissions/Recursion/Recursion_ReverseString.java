package BootCamp_Submissions.Recursion;
import java.util.Scanner;

// Can be applied for Numbers too !
// Used Static Method >> so that we don't need to create object of the Class for implementation of the method.
public class Recursion_ReverseString{
    
    public static void reverseString(String str)   
    {  
        if(str.length()<=1){
            System.out.println(str);
        } else {
            System.out.print(str.charAt(str.length()-1));
            reverseString(str.substring(0, str.length()-1));
        }
    }  
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter a String / Number / Combination to Reverse :");
        String str = in.nextLine();
        System.out.println("Reverse of String : ");
        reverseString(str);
        in.close();
    }
}