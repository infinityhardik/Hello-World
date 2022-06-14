/* 
You are given an infix expression as an input and you have to convert that infix expression to postfix expression and print the postfix expression as an output.

Example :
Input :
a^b
Output:
ab^

Input:
a*(b+c)
Output:
abc+*

Input:
j+k*(k^l-m)^(n+o*p)-q+a
Output:
jkkl^m-nop*+^*+q-a+
*/

package Stacks_Queues;

import java.util.Scanner;
import java.util.Stack;

public class PostfixExpressionCreator {
    
    public static int checkPrecedence(char c){
        if(c=='^'){ return 3;}
        if(c=='/'){ return 2;}
        if(c=='*'){ return 2;}
        if(c=='+'){ return 1;}
        if(c=='-'){ return 1;}
        return -1;
    }
    
    public static void main(String arg[]) {
        Stack<Character> s = new Stack<Character>();
        Scanner in = new Scanner(System.in);
        
        String exp = in.nextLine();
        String ans = "";
        for(int i=0; i<exp.length(); i++){
            char c = exp.charAt(i);
            
            //if(Character.isLetterorDigit(ch))
            
            if(c!='+' && c!='-' &&  c!='*' && c!='/' && c!='^' && c!='(' && c!=')'){
                ans+=c;
                //System.out.println(ans);
            } else if(c=='('){
                s.push(c);
            } else if(c==')'){
                char pop=s.pop();
                while(pop!='('){
                    ans+=pop;
                    pop = s.pop();
                }
            } else {
                if(s.isEmpty()){
                    s.push(c);
                    //System.out.println(s);
                } else if(checkPrecedence(s.peek())<checkPrecedence(c)){
                    s.push(c);
                    //System.out.println(s);
                } else {
                    while(!s.isEmpty() && checkPrecedence(s.peek())>=checkPrecedence(c)){
                        ans+=s.pop();
                        //System.out.println(ans);
                    }
                    s.push(c);
                }
            }
        }
        
        while(!s.isEmpty()){
            ans+=s.pop();
        }
        System.out.println(ans);
        in.close();
    }
}

/* 
Note: Let's say that the 'answer' is a string variable, which would be the final output.

Iterate through the infix expression:

If the element is an operand, then add it to the answer.

Else, if the element is ‘(’, then push it to the stack.

Else, if the element is ‘)’, then pop it from the stack and add it to the answer until the popped element is ‘(’.

Else, if the element is an operator, then:

If the precedence of the top of the stack is less than the precedence of the element, or if the stack is empty, then push that element to the stack.

Otherwise, pop the operator from the stack and add it to the answer until the precedence of the element is less than or equal to the precedence of the top of the stack.

Repeat Step 1 till you reach the end of the given infix expression.

If the stack is not empty, then pop the stack and add to the answer until the stack is empty.
*/