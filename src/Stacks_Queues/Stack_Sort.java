/* 
Pseudocode for Sorting :

1. Create a temporary stack, say, ‘temp’

2. When the input stack is NOT empty:

1.) pop() an element and store it in the temporary integer variable ‘value’

2.) While the ‘temp’ stack is NOT empty AND ‘value’ <top value in ‘temp’ stack:

Pop the top value from ‘temp’ stack and push it into ‘input’ stack

3.) Push ‘value’ into ‘temp’ stack

3. Return ‘temp’ stack, which contains all the elements in the input stack in ascending sorted order from bottom to top.
*/

package Stacks_Queues;

import java.util.Scanner;
import java.util.Stack;

public class Stack_Sort {
    public static void main(String args[]) {
        Stack<Integer> stack = new Stack<>();
        Scanner s = new Scanner(System.in);
        System.out.println("Enter No. of Stack Elements :");
        int n = s.nextInt();
        System.out.println("Stack Elements = ");
        while (n-- > 0){
            stack.push(s.nextInt());
        }
        
        System.out.println("1 for Ascending Order and 2 for Descending Order");
        int key = s.nextInt();
        
        switch (key) {
            case 1:
            ascendingSort(stack);
            break;
            
            case 2:
            descendingSort(stack);
            
            default:
            break;
        }
        s.close();
    }
    
    // Method to sort the elements of the stack in ascending order from bottom to top
    static void ascendingSort(Stack<Integer> stack) {
        Stack<Integer> temp = new Stack<>();
        while (!stack.isEmpty()) {
            // Remove the top element from the original stack
            int n = stack.pop();
            // Remove the elements form temp stack which are greater than n and push into original stack
            while (!temp.isEmpty() && temp.peek() > n)
            stack.push(temp.pop());
            temp.push(n);
        }
        System.out.println(temp);
    }
    
    // Method to sort the elements of the stack in descending order from bottom to top
    static void descendingSort(Stack<Integer> stack) {
        Stack<Integer> temp = new Stack<>();
        while (!stack.isEmpty()) {
            // Remove the top element from the original stack
            int n = stack.pop();
            // Remove the elements form temp stack which are less than n and push into original stack
            while (!temp.isEmpty() && temp.peek() < n)
            stack.push(temp.pop());
            temp.push(n);
        }
        System.out.println(temp);
    }
}
