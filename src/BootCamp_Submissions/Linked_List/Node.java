package BootCamp_Submissions.Linked_List;
// Linked List Demo
public class Node {
    
    int data;
    Node next; // stores the reference of next Node i.e, Object of same data type
    /* 
    Node = Data Type, next = "Reference Name" of Data Type Variable 
    Pointer = Reference
    */
    
    Node(int data){
        this.data = data;
        this.next = null;
    }

    /*
    Any Update/Modification/Assignment to Node.next using "=" Operator will result in overwrite of that next value.
    Thereby updating "next" value can result into Linked List Modification operations like Insertion and Deletion
    into the Linked List Memory Reference Blocks.
    
    This means any update to next pointer can result into Data references getting updated which is equivalent of 
    "Breaking the Link and then Joining the Links again to a Chain (Chain = Bicycle/Motorcycle Chain)."
    */
    
    public static void print(Node head){
        Node curr = head;
        System.out.print("Head > ");
        while(curr != null){
            System.out.print(curr.data + " > ");
            curr = curr.next;
        }
        System.out.print("null");
        System.out.println();
    }
}