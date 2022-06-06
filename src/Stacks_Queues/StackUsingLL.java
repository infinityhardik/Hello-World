// Created Stack using Linked List.
/* 
Push and Pop done at the Top.
Operations for Stack are done on the Left End Side of Linked List because the time complexity is O(1) there.
Stack is created by moving from Left << Right side << null of Linked List.

The ‘last in, first out’ property of the stack data structure makes it more run-time efficient 
than a simple array or a linked list in finding the last function called as T(n) is of O(1) at end.
*/

package Stacks_Queues;

import java.util.Scanner;

public class StackUsingLL {
    
    class Node{
        int data;
        Node next;
        Node(int data){
            this.data =  data;
            next = null;
        }
    }
    
    private int top = -1;
    private int size;
    Node head;
    StackUsingLL(int size){
        this.size = size;
        head = null;
    }

    public void insert_push(int data){
        if(top == -1){
            head =  new Node(data);
            top++;
        } else if (top+1 == size){
            System.out.println("Stack Overflow !");
        } else {
            Node newNode = new Node(data);
            newNode.next = head; // Updating Next pointer of newNode to Current Head Pointer. 
            head = newNode; // Updating Current Head pointer to newNode.
            top++;
        }
    }
    public int delete_pop(){
        if(top == -1){
            System.out.println("Stack Underflow !");
            return -1;
        }

        Node temp = head;
        head = head.next;
        temp.next = null; // modifying next value of TOP once delete is called in order to prevent access to the Node.
        top--;
        return temp.data;
        
    }
    public void printStack(){
        if(top == -1){
            System.out.println("Stack is Empty");
        } else {
            Node temp = head;
            while(temp != null){
                System.out.print(temp.data+ " ");
                temp = temp.next;
            }
            System.out.println();
        }
    }
   public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter No. of Stack Elements : ");
        int n = in.nextInt();
        
        StackUsingLL stack = new StackUsingLL(n);
        
        System.out.println("Start Entering Stack Elements");
        for (int i = 0; i < n; i++) {
            stack.insert_push(in.nextInt());
        }
        
        stack.insert_push(in.nextInt());
        // Voluntary Stack Overflow for Testing !
        
        stack.printStack();
        
        int del = stack.delete_pop();
        System.out.println("Deleted Value = "+del);
        System.out.println("New Stack : ");
        stack.printStack();

        System.out.println("Enter No.of Stack Elements to Delete ");
        int n1 = in.nextInt();

        for (int i = 0; i < n1; i++) {
            stack.delete_pop();
            stack.printStack();
        }
        
        stack.delete_pop();
        stack.printStack();
        // Voluntary Stack Underflow for Testing !
        
        in.close();
    }
}
