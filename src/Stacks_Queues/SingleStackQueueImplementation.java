/* 
Implements a Queue using a Single Stack , i.e., Stack acts like a Queue

Write a program to implement the basic methods of 'queue', i.e. enqueue( ) and 
dequeue( ) using a single stack. 

The solution will perform the enqueue( ) function on the input elements and 
print the top 3 elements after calling the ‘Dequeue’ method three times on the given elements.

Constraint:  The time complexity of your code in the worst case should be O(n).


Input:
6
1 2 3 4 5 6

Output: 
1
2
3
*/
package Stacks_Queues;

import java.util.Scanner;
import java.util.Stack;

class ImplementQueue{
    
    Stack<Integer> stack = new Stack<Integer>();
    
    //The basic push and pop method of a stack are used to create enqueue and dequeue function of a queue
    
    public void enQueue(int newData){
        // Normal Stack Push Operation
        stack.push(newData);
    }
    
    
    // Function to deQueue an item from queue 
    public void deQueue(){
        
        // Using Recursion, i.e., Program Stack to reach the First Element of the Stack in order to achieve FIFO.  
        
        if(stack.isEmpty()){
            System.out.println("No Elements Left");
            return;
        }
        
        if(stack.size()==1){
            System.out.println(stack.pop());
            return;
        }
        
        int elem = stack.pop();
        deQueue();
        stack.push(elem);
    } 
}

public class SingleStackQueueImplementation { 
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        ImplementQueue obj = new ImplementQueue();
        int n=in.nextInt();
        for(int i=0;i<n;i++) {
            obj.enQueue(in.nextInt());   
            
        }  
        obj.deQueue();
        obj.deQueue();
        obj.deQueue();
        in.close();
    }
}