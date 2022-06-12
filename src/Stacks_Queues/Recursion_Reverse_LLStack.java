package Stacks_Queues;
import java.util.Scanner;
public class Recursion_Reverse_LLStack {
    // Creating LL Node
    Node top;
    
    class Node {
        char data;
        Node next;
        public Node(char data) {
            this.data = data;
            next = null;
        }
    }
    
    
    // Push and Pop operations for Stack created
    public void push(char data) {
        Node new_node = new Node(data);
        if (top == null) {
            top = new_node;
        } else {
            new_node.next = top; // Insertion on the Left End of LL
            top = new_node; // Updating Top Pointer
        }
    }
    
    public Node pop() {
        Node temp = top;
        top = top.next; // Updating Top Pointer of Stack LL
        return temp;
    }
    
    // Print contents of Stack
    public void display(Node node) {
        Node temp = node;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
    }
    
    // Reverses the stack using Simple Linked List reversal logic. Ex Stack : 3 2 1
    
    /* IF (stack is not empty)
    //Hold all items in function call stack until we reach the end of the stack
    1. LET i contain top element from stack.
    2. POP the top element from stack.
    3. reverse() 
    Insert all the items in function call stack one by one from the bottom to top. 
    Each item is inserted at the bottom of the stack
    4. insertAtEnd(i) >> Values will be >> 1 2 3 for this function.
    */
    
    public Node reverse() {    
        if(top!=null){
            char i = pop().data;
            reverse();
            insertAtEnd(i);
        }
        return top;
    }
    
    // The following function inserts an element at the bottom of a stack
    /* 
    A. IF (stack is empty)
    PUSH i to the top of the stack
    
    B. ELSE
    // All items are held in function call stack until we reach end of the stack.
    When the stack becomes empty the item is inserted at the bottom.
    
    1. In varaible j we will store the value which is at the top of stack.
    2. POP the top element from the stack
    3. insertAtEnd(i)
    
    //Push all the items which are held in function call stack once the item is inserted at the bottom
    4. PUSH j to the top of the stack
    */
    public Node insertAtEnd(char i){
        if(top==null){
            push(i);
        } else {
            char j = pop().data;
            insertAtEnd(i);
            push(j);
        }
        return top;
    }
    
    public static void main(String[] args) {
        Recursion_Reverse_LLStack obj = new Recursion_Reverse_LLStack();
        Scanner in = new Scanner(System.in);
        System.out.println("Enter No. of Nodes and then start entering the elements at Node : ");
        int n = in .nextInt();

        if(n==0){
            System.out.println("The Stack is Empty !");
            System.exit(0);
        }
        for (int i = 0; i < n; i++) {
            obj.push(in.next().charAt(0));
        }

        System.out.println("Current Stack : ");
        obj.display(obj.top);
        System.out.println(" ");
        
        System.out.println("Reversed Stack using Recursion : ");
        Node temp = obj.reverse();
        obj.display(temp);
        
        in.close();
    }
}
