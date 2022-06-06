// Created Stack using Arrays 
/* 
Push and Pop done at the Top.
Operations for Stack are done on the Right End Side of Array because the time complexity is O(1) there.
Stack is created by moving from Left >> Right side of Array.

The ‘last in, first out’ property of the stack data structure makes it more run-time efficient 
than a simple array or a linked list in finding the last function called as T(n) is of O(1) at end.
*/

package Stacks_Queues;

import java.util.Scanner;

public class StackUsingArray{
    private  int arr[];
    private int top; 
    // declared private in order to restrict data access and tampering to Stack as this acts as the pointer variable 
    
    StackUsingArray(int n){
        arr = new int[n];
        top = -1;
    }

    public void insert_push(int data){
        if(top+1 == arr.length){
            System.out.println("Stack Overflow !");
            return;
        }
        arr[++top] = data;
    }

    public int delete_pop(){
        if(top == -1){
            System.out.println("Stack Underflow !");
            return -1;
        }
        int del = arr[top];
        arr[top] = -123; 
        // removing/deleting/modifying value once delete is called in order to prevent access to the original data.
        top--;
        return del;
    } 

    public void printStack(){
        for (int i = 0; i <= top; i++) { 
            System.out.print(arr[i]+" ");
            if(i == top){
                System.out.println();
            }
        }
    }
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter No. of Stack Elements : ");
        int n = in.nextInt();
        
        StackUsingArray stack =  new StackUsingArray(5);
        
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
