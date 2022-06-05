// Finds and Removes Duplicates in a Sorted Linked List.

// Using Try Catch block to find out the Wrong Input.
package BootCamp_Submissions.Linked_List;

import java.util.Scanner;

public class Node_Duplicate {
    
    static class Node{
        int data;
        Node next;
        
        Node(int data){
            this.data = data;
            next = null;
        }
        
    }
    
    static void print(Node head){
        Node pointer = head;
        while(pointer!=null){
            System.out.print(pointer.data+" ");
            pointer = pointer.next;
        }
    }
    
    static void duplicate(Node head, int n){
        Node pointer = head; // Creating first pointer
        Node pointer1 = head.next; // Creating second pointer
        
        int duplicates = 0; // Tracking no. of duplicates.
        
        if(head == null || n == 0){
            System.out.println("the list is empty");
        } else {
            while(pointer1 != null && pointer != null){
                if(pointer.data == pointer1.data){
                    duplicates++;
                    pointer1 = pointer1.next; // Updating Pointer1;
                    pointer.next = pointer1; // Linking Pointer Next Node to Pointer1
                } else {
                    pointer.next = pointer1; // Updating Pointer Next to Pointer 1 in case next node is not duplicate.
                    pointer = pointer.next; // Updating Pointer Node : i.e., Moving Pointer onto the Next Node.
                    pointer1 = pointer1.next; // Updating Pointer1 to next node for comparison if its unique.
                }
            }
            n = n - duplicates;
            if(duplicates==0){
                System.out.println("All the elements exists uniquely in the list");
            } else {
                print(head);
            }
            
        }
    }
    
    public static void main(String args[] ) throws Exception {
        try{
            Scanner in = new Scanner(System.in);
            int n = in.nextInt();
            
            Node head = new Node(in.nextInt());
            Node pointer = head;
            
            
            
            for(int i=1; i<n; i++){
                pointer.next = new Node(in.nextInt());
                pointer = pointer.next;
            }
            
            duplicate(head, n);
            in.close();
            
        } catch (Exception e){
            System.out.println("Stopped Program on account of Wrong Input !");
        }
    }
}
/* Solved by Hardik Bhaavani */