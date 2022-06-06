/* Implements a Stack using a Single Queue , i.e., Queue acts like a Stack */
package Stacks_Queues;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class SingleQueueStackImplementation {
    // implementing queue using linked list
    Queue < Integer > q = new LinkedList < Integer > ();
    
    // Push operation of stack using queue
    void push(int x) {
        q.add(x);
        int n = q.size();
        for(int i=0; i<n-1; i++){
            q.add(q.remove());
        }
    }
    
    // Removes the top element of the stack
    int pop() {
        if(q.isEmpty()){
            System.out.println("Stack is Empty!");
            return -1;
        } 
        return q.remove();
    }
    
    
    // Returns the element at the top of the stack
    int top() {
        if(q.isEmpty()){
            System.out.println("Stack is Empty!");
            return -1;
        }
        return q.peek();
    }
    
    
    public static void main(String[] args) {
        SingleQueueStackImplementation obj = new SingleQueueStackImplementation();
        Scanner in = new Scanner(System.in);
        
        System.out.println("Enter the number of elements you want to add in the stack :");
        int n = in .nextInt();
        
        for (int i = 0; i < n; i++) {
            obj.push( in .nextInt());
        }
        
        System.out.println("Topmost Element of Stack : "+obj.top());
        obj.pop();
        System.out.println("New Top ELement of Stack after popping : "+obj.top());
        in.close();
    }
}