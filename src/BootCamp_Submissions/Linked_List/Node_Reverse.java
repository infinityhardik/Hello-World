package BootCamp_Submissions.Linked_List;
public class Node_Reverse {

    static Node reverse(Node head){
        /* 
        As this is a Singly Linked List :
        Creating 2 Node Pointers = Current and Previous; 
        Assume Linked List as : [First Node = Head = 1] > [2] > [3] > [Last Node = null]
        The Current Pointer is initialized with the First node, i.e., Head and 
        the Previous Pointer is initialized with the Last Node i.e, null.
        
        Creating a temporary node for preserving value of Head.next i.e., cur.next OR 2
        
        cur.next will be linked to null i.e, 1 > null (because it is a Singly Linked List and direction remains
        from Left to Right Only { i.e., Head always comes first and Null always comes last; HEAD > NULL}.)
        
        (temp node will have the remaining 2 > 3 Links)
        
        prev will become current i.e, 1 = prev = cur > null.
        cur will be linked to temp i.e., 2 OR we will be moving our cur pointer onto the next node.
        
        Output : 1 {prev} > null && 2 {cur}  
        
        Repeating the above same procedure until null.
        Output : [First Node = Head = Prev = 3] > [2] > [1] > [Last Node = null]
        */
        
        Node cur = head;
        Node prev = null;
        
        while(cur!=null){
            Node temp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = temp;
        }
        return prev; // Returning New Head Pointer.
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
        Node.print(reverse(head));

    }
}
