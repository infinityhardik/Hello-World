/* 
Description :
You are given a postfix expression as an input and you have to evaluate that postfix expression and print the output.
Note: Operands will be Single Digits only. 
Example : 
Input: 
12+ 
Output: 
3 

Input : 
123*-4- 
Output: 
-9 
*/
package Stacks_Queues;

import java.util.Scanner;
import java.util.Stack;

public class PostfixExpressionEvaluation {
    public static void main(String arg[]) {
        Stack<Integer> s = new Stack<Integer>();
        Scanner in = new Scanner(System.in);

        String exp = in.nextLine();

        for (char ch : exp.toCharArray()) {
            if (Character.isDigit(ch)) {
                s.push(ch - '0');
            } else {
                int b = s.pop();
                int a = s.pop();
                if (ch == '+') {
                    s.push(a + b);
                } else if (ch == '-') {
                    s.push(a - b);
                } else if (ch == '*') {
                    s.push(a * b);
                } else if (ch == '/') {
                    s.push(a / b);
                }
            }
        }
        System.out.println(s.peek());
        in.close();
    }
}