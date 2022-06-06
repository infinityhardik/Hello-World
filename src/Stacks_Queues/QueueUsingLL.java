// Created Queue using Linked List. 
/* 
It follows 'first in, first out' property.

Enqueue/nQ (Insertion) is done at the Right end and Dequeue/dQ (Deletion) is done at the Left End of the Linked List to resemble a Queue.

But Left End has a O(1) T(n) and Right End has O(n) T(n) for Linked List. 
∴ we use Two Pointer Approach to achieve O(1) T(n) at both the ends of the Linked List
so that we have operational efficiency.

Queue is created here by moving from Left >> Right side of Linked List.

Overflow is not possible in Linked List because it is Dynamic in Nature and can expand its size as per needs in
the current program.
Only Underflow is possible because queue can be empty.
*/
package Stacks_Queues;
import java.util.Scanner;

public class QueueUsingLL{
    
    Node front; // Head Node
    Node rear; // Tail Node
    
    class Node{
        int data;
        Node next;
        Node(int data){
            this.data = data;
            next = null;
        }
    }
    
    public void insert_push(int data){
        if(rear == null){
            rear = new Node(data); // rear pointer moves first
            front = rear; // front pointer moves next
        } else {
            rear.next = new Node(data); // Linking New Node with Data.
            rear = rear.next ; // Moving Rear Pointer onto the Tail/Last Node with Data
        }
    }
    
    public int delete_pop(){
        if(front == null){
            System.out.println("Underflow !");
            return -123;
        } else {
            if(front == rear){ // Reaching Last Node
                int del =  front.data;
                front =  null;
                rear = null;
                return del;
            }
            Node temp = front;
            front = front.next; // Updating Front Pointer
            temp.next = null; // De-Linking Deleted Node
            return temp.data; // returning deleted data.
        }
    }
    public void printQueue(){
        Node temp = front;
        while(temp != null){
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter No. of Queue Elements : ");
        int n = in.nextInt();   
        
        QueueUsingLL q = new QueueUsingLL();
        
        System.out.println("Start Entering Queue Elements");
        for (int i = 0; i < n; i++) {
            q.insert_push(in.nextInt());
        }
        
        q.printQueue();
        
        int del = q.delete_pop();
        System.out.println("Deleted Value = "+del);
        System.out.println("New Queue : ");
        q.printQueue();
        
        System.out.println("Enter No.of Queue Elements to Delete ");
        int n1 = in.nextInt();
        
        for (int i = 0; i < n1; i++) {
            q.delete_pop();
            q.printQueue();
        }
        
        // q.delete_pop();
        // q.printQueue();
        
        in.close();
    }
}
