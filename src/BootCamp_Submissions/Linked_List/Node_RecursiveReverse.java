package BootCamp_Submissions.Linked_List;

public class Node_RecursiveReverse{
    static Node reverse(Node head) {
        if(head == null) {
            return head;
        }
  
        // last node or only one node
        if(head.next == null) {
            return head;
        }

        
        //We first traverse till the last node, and making the last node as the head node of reversed linked list.  
        
        Node newHeadNode = reverse(head.next);
        
        // change references for middle chain
        head.next.next = head; 
        head.next = null;
        
        // send back newHeadNode = Original Last Node in every recursion
        return newHeadNode;
    }

    /* 
    Assume Linked List as 1 > 2 > 3 > 4 : 

    // In recursion base condition will always be executed only once

    As soon as Node newHeadNode = reverse(head.next) is reached a Call Stack will be formed with Head Values = 1,2,3,4

    Call Stack will be 1-2-3-4 but base condition will be reached when call stack is at 4 i.e, head.next = null.

    Recursions will be as follows with LIFO :

    Call Stack 4 : (head.next = null) ∴ return head; will be executed and 4 will be returned.
                We will be shifting the pointer towards last node as newHeadNode.
                Then, we will start linking on this Original Node.

    Call Stack 3 : newHeadNode = reverse(4) ∴ newHeadNode = 4     { Linked List will be  4 }
                head.next.next = head means 3 > 4 > null :-- move to null node and update it with head = 3.
                head.next = null means 3 > 4 > 3 > null;

    Call Stack 2 : newHeadNode = reverse(3) ∴ newHeadNode = 4     { Linked List will be  4 > 3 > null }
                head.next.next = head means 2 > 3 > 4 > null :-- move to 4 node and update it with head = 2.
                head.next = null means 2 > 3 > 2 > null;
                
    Call Stack 1 : newHeadNode = reverse(2) ∴ newHeadNode = 4     { Linked List will be  4 > 3 > 2 > null }
                head.next.next = head means 1 > 2 > 3 :-- move to 3 node and update it with head = 1.
                head.next = null means 1 > 2 > 1 > null;


                Final Output will be { Linked List =  4 > 3 > 2 > 1 > null }
    Therefore newHeadNode = Original Last Node linked with shifted elements in the Call Stack.

    */

    public static void main(String[] args) {
        Node n1 = new Node(10);
        Node n2 = new Node(20);
        Node n3 = new Node(30);
        Node n4 = new Node(40);
        
        // Linking Nodes
        Node head = n1;
        head.next = n2;
        n2.next = n3;
        n3.next = n4;
        Node.print(head);

        Node.print(reverse(head));
    }
}