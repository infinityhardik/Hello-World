// Checks for Palindrome using a Stack.
package Stacks_Queues;
import java.util.Stack;
import java.util.Scanner;

public class Palindrome_Stack {
    public static void main(String[] args) {
        
        System.out.print("Enter any string:");
        Scanner in = new Scanner(System.in);
        String inputString = in.nextLine();
        Stack<Character> stack = new Stack<>();
        
        for (int i = 0; i < inputString.length(); i++) {
            stack.push(inputString.charAt(i));
        }
        
        String reverseString = "";
        
        while (!stack.isEmpty()) {
            reverseString = reverseString+stack.pop();
        }
        
        if (inputString.equals(reverseString))
        System.out.println("The input String is a palindrome.");
        else
        System.out.println("The input String is not a palindrome.");

        in.close();
    }
}

