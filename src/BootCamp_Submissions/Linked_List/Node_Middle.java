package BootCamp_Submissions.Linked_List;

public class Node_Middle {

    static Node mid(Node head){
        Node slowPointer = head;
        Node fastPointer = head;

        while (fastPointer.next!=null && fastPointer.next.next != null) {
            slowPointer = slowPointer.next;         
            fastPointer = fastPointer.next.next;   
        }
        return slowPointer;
    }
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
        
        Node_Insertion.insertAtEnd(head, 50);
        Node.print(head);

        Node mid = mid(head);
        System.out.println("Middle Element : "+mid.data);
    }
}
