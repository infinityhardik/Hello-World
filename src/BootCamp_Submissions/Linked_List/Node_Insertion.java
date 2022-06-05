package BootCamp_Submissions.Linked_List;
public class Node_Insertion {
    static void insert(Node head, int data, int index){
        // Works for Last Index too
        Node toAdd = new Node(data);
        Node cur = head;
        
        // Node cur acts as a pointer and is modifying the current data of node.
        
        for(int i = 0; i < index-1; i++){
            cur = cur.next;
        }
        toAdd.next = cur.next;
        cur.next = toAdd;
        
    }

    static void insertAtEnd(Node head, int data){
        Node toAdd = new Node(data);
        toAdd.next = null;
        
        // Node cur acts as a pointer and is modifying the current data of node.
        
        Node cur = head; 
        while(cur.next != null){
            cur = cur.next;
        }
        cur.next = toAdd;
    }
    
    static Node insertAtBeginning(Node head, int data){
        Node toAdd = new Node(data);
        toAdd.next = head;
        return head = toAdd; // We need to return new head
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
        
        head = insertAtBeginning(head,0);
        Node.print(head);
        
        insert(head,50,4);
        Node.print(head);
        
        insertAtEnd(head,60);
        Node.print(head);

    }
}
