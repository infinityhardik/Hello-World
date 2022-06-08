/* Duplicate Parentheis is different from Balanced Parenthesis.
 * Duplicate Parenthesis Examples: (((1*2))+5) , ((a+b))
 * 
 * Note: The given expression is balanced only in terms of parentheses, i.e., ( ); 
 * other brackets, such as '{' and '[', are not considered.
 * Hence {(a+b)} would not be considered duplicate parenthesis.
*/
package Stacks_Queues;

import java.util.Scanner;
import java.util.Stack;

class Duplicate_Parenthesis{
    public static String findDuplicateParenthesis(String inputString) {
        Stack<Character> ch = new Stack<>();
        for(int i=0; i<inputString.length(); i++){
            if(inputString.charAt(i)!=')'){
                ch.push(inputString.charAt(i));
            } else {
                char x = ch.pop();
                if(x=='('){
                    // If Opening Bracket is found at First Pop, it can be concluded that duplicate parenthesis exist.
                    return "Input string contains duplicate parenthesis";
                } else {
                    // running a while loop till we reach Opening Parenthesis.
                    while(x!='('){
                        x = ch.pop();
                    }
                }
            }
        }
        // Even if Stack is not empty we can conclude that there are No Duplicate Parenthesis.
        return "Input string does not contain duplicate parenthesis";
    }
    
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        System.out.println("Enter an Expression to check for Duplicate Parenthesis :");
        String inputString = in.nextLine();
        System.out.println(findDuplicateParenthesis(inputString));
        // can be converted to boolean too.
        in.close();
    }
}
/* Solved by Hardik Bhaavani */
