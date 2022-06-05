package BootCamp_Submissions.Linked_List;

public class Node_isPalindrome {
    
    static boolean isPalindrome(Node head){
        if(head.next==null){
            return true;
        }
        Node mid = Node_Middle.mid(head);
        Node leftPointer = head;
        Node rightPointer = Node_Reverse.reverse(mid);

        while(rightPointer != mid){
            if(leftPointer.data!=rightPointer.data){
                return false;
            }
            leftPointer = leftPointer.next;
            rightPointer = rightPointer.next;
        }
        return true;
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
        System.out.println(isPalindrome(head));

        Node_Insertion.insertAtEnd(head,30);
        Node_Insertion.insertAtEnd(head,20);
        Node_Insertion.insertAtEnd(head,10);
        Node.print(head);
        
        System.out.println(isPalindrome(head));
        
        Node_Insertion.insertAtEnd(head,50);
        Node.print(head);
        System.out.println(isPalindrome(head));
    }
}
