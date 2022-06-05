package BootCamp_Submissions.Linked_List;

public class Node_isCyclical {
    
    static boolean isCyclical(Node head){
        
        if (head == null){
            return true;
        }
        
        Node slow = head;
        Node fast = head.next;
        
        while(slow != fast){
            if(fast == null || fast.next == null){
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        return true;
    }
    /* 
    Traverse linked list using two pointers.
    Move one pointer(slow_p) by one and another pointer(fast_p) by two.
    
    If these pointers meet at the same node then there is a loop. 
    If pointers do not meet then linked list doesn’t have a loop.
    */
    
    public static void main(String[] args) {
        Node n1 = new Node(10);
        Node n2 = new Node(20);
        Node n3 = new Node(30);
        Node n4 = new Node(40);
        Node n5 = new Node(50);
        Node n6 = new Node(60);
        
        
        // Linking Nodes
        Node head = n1;
        head.next = n2;
        n2.next = n3;
        n3.next = n4;
        n4.next = n5;
        Node.print(head);
        System.out.println("Cyclical : "+isCyclical(head));
        
        n5.next = n6;
        n6.next = n3;
        System.out.println("Cyclical : "+isCyclical(head));

    }
}
