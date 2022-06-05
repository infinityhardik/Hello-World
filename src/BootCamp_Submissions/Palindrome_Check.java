/*  Write a program to check whether a number or string is palindrome or not. */

package BootCamp_Submissions;
import java.util.Scanner;

public class Palindrome_Check{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Palindrome Checker" + "\n");
        System.out.println("Enter a Number or a String :");
        String str = in.nextLine();
        int count = 0;
        for (int i = 0; i < (str.length()/2); i++) {
            if(str.charAt(i)==str.charAt(str.length()-1-i)){
                count++;
            } else { break; }            
        }
        if(count==str.length()/2){
            System.out.println("The String is a Palindrome.");
        } else {
            System.out.println("The String is NOT a Palindrome !");
        } 
        in.close();
    }
}
/* Solved by Hardik Bhaavani */