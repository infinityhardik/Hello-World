// Solved by Hardik Bhaavani
/* 
Description : 
Write a program that will perform the below-given list of operations on the elements of a stack in O(1) time complexity.
Pop an element from the top of the stack.
Push an element at the top of the stack.
Find the middle element and print it.

Constraint:  You are not allowed to use any other data structure other than the stack you are creating.

Sample Test Cases:
Input:
6                                                                                                                          
2 8 1 9 0 3                                                                                                                

Output:
3                                                                                                                          
1

Input:
10
6 10 3 56 78 90 21 20 36 67
Output:
67
78

*/
package Stacks_Queues;
import java.util.*;
public class Optimize_Stack_Operation {
    
    /* Basic structure of a node of a doubly linked list. This doubly linked list will be used to create a stack. */
    static class Node {
        Node prev;
        int data;
        Node next;
        Node(int d) {
            data = d;
        }
    }
    
    /* This is the basic structure of a stack that will reference to two nodes which are 'head' and the 'mid' */
    static class StackNode {
        Node head;
        Node mid;
        int count;
    }
    
    /* The method will create an object of class StackNode and create a new stack */
    static StackNode implementStackUsingLinkedlist() {
        StackNode stack = new StackNode();
        stack.count = 0;
        return stack;
    }
    
    static void push(StackNode node, int new_data)
    {
        // Creating New Node Temp.
        Node temp = new Node(new_data);
        temp.next = null;
        
        if(node.count==0){
            node.head = temp;
            node.head.prev = null;
            
            node.mid = node.head;
            node.count++;
        } else {
            temp.prev = node.head; // Updating Previous Pointer of New Node.
            node.head.next = temp; // Updating Next Pointer of Head with New Node.
            node.head = node.head.next; // Updating Head to top of the Stack.
            
            node.count++; // Updating Stack Size.
            
            if(node.count%2==1){
                node.mid = node.mid.next; // Updating Mid Pointer only if count is an Odd Number for Push operation.
            }
        }
    }
    
    static int pop(StackNode stack) {
        
        if(stack.count==0){
            System.out.println("The stack is empty");
            System.exit(0);
        }

        Node temp = stack.head; // Creating Temp Pointer to popped element
        stack.head = temp.prev; // Updating Head (Top) of Stack to previous pointer.
        stack.count--; // Updating Count.
        
        if(stack.count%2==0){
            stack.mid = stack.mid.prev; // Updating Mid Pointer only if count is an Even Number for Pop operation.
        }
        return temp.data; // Returning Popped Element Data.
        
    }
    
    static int middleElement(StackNode stack) {
        return stack.mid.data; // Returning Mid Data
    }
    
    public static void main(String args[]) {
        StackNode stack = implementStackUsingLinkedlist();
        Scanner in = new Scanner(System.in);
        int n = in .nextInt();
        for (int i = 0; i < n; i++) {
            push(stack, in .nextInt());
            
        }
        
        System.out.println("Popped Element : "+pop(stack) + "");
        System.out.println("Middle Element : "+middleElement(stack) + "");
        in.close();
    }
}
