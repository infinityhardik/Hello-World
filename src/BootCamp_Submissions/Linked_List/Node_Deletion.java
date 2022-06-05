package BootCamp_Submissions.Linked_List;
public class Node_Deletion {

    static void delete(Node head, int index){
        Node node = head;
        for(int i = 0; i < index-1; i++){
            node = node.next;
        }

        node.next = node.next.next;
        /* 
        Here, we are just removing the reference of the required node. 
        In Java > If reference (to the data) is lost, the variable will be lost i.e., it will be "deleted".
        */
    }

    static Node deleteAt0Index(Node head){
        return head.next;
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

        delete(head, 1);
        Node.print(head);

        head = deleteAt0Index(head);
        Node.print(head);
    }
}
