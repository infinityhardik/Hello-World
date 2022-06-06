// Created Queue using Arrays 
/* 
It follows 'first in, first out' property.

Enqueue/nQ (Insertion) is done at the Right end to achieve O(1) T(n) 
and Dequeue/dQ (Deletion) is done at the Left End of the Array to resemble a Queue.

But Left End has a O(n) T(n) in Arrays. 
∴ we use Two Pointer Approach to achieve O(1) T(n) at both the ends of the Array so that we have operational efficiency.

Queue is created by moving from Left >> Right side of Array.
*/
package Stacks_Queues;
import java.util.Scanner;

public class QueueUsingArray {
    int arr[], front, rear;
    
    QueueUsingArray(int n){
        arr = new int[n];
        front = -1;
        rear = -1;
    }
    
    public void insert_push(int data){
        if(rear == arr.length-1){
            System.out.println("Overflow ! > Can't insert "+data);
        } else {
            rear++;
            arr[rear] = data;
            // OR we can write this as arr[++rear] = data;
        }
    }
    
    public int delete_pop(){
        if(rear == front){
            // Resetting Queue to Empty.
            front = -1; 
            rear = -1;
            System.out.println("Underflow !");
            return -123;
        }
        else{
            front++;
            int del = arr[front]; // OR we can write this as int del = arr[++front];
            arr[front] = -123;
            return del;
            //-123 is garbage value for this program
        }
    }
    
    public void printQueue(){
        for(int i = front+1 ; i<=rear;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
    }
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter No. of Queue Elements : ");
        int n = in.nextInt();
        
        QueueUsingArray q =  new QueueUsingArray(n);      
        
        System.out.println("Start Entering Queue Elements");
        for (int i = 0; i < n; i++) {
            q.insert_push(in.nextInt());
        }
        
        q.insert_push(in.nextInt());
        // Voluntary Queue Overflow for Testing !
        
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
        // Voluntary Queue Underflow for Testing !
        
        in.close();
    }
}