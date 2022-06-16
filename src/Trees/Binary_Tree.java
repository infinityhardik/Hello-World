package Trees;

import java.util.LinkedList;
import java.util.Queue;

public class Binary_Tree {
    class Node{
        Node left;
        Node right;
        String data;
        Node(String data){
            this.data = data;
            left = null;
            right = null;
        }
    }
    public void inOrderDFS(Node root){
        if(root == null){
            return;
        }
        inOrderDFS(root.left);
        System.out.print(root.data +" ");
        inOrderDFS(root.right);
    }
    public void preOrderDFS(Node root){
        if(root == null){
            return;
        }
        System.out.print(root.data +" ");
        preOrderDFS(root.left);
        preOrderDFS(root.right);
    }
    public void postOrderDFS(Node root){
        if(root == null){
            return;
        }
        
        postOrderDFS(root.left);
        postOrderDFS(root.right);
        System.out.print(root.data +" ");
    }
    
    // Performs Left to Right Breadth First Search (Iterative)
    public void BFS(Node root){
        if(root != null){
            Queue<Node> q = new LinkedList<>();
            q.add(root);
            while (!q.isEmpty()) {
                
                //Creating Temp Node to avoid multiple calls to Peek Function of Queues.
                
                Node temp = q.remove(); 
                System.out.print(temp.data+" ");
                
                // enqueue left child into queue
                if(temp.left!=null)
                q.add(temp.left);
                
                
                // enqueue right child into queue
                if(temp.right!=null)
                q.add(temp.right);
                
            }
            System.out.println();
            
        } else {
            System.out.println("Root is Null");
        }
    }
    
    // Method to calculate height of a tree
    public int height(Node root) {
        if (root == null)
        return 0;
        int leftHeight = height(root.left);
        int rightHeight = height(root.right);
        
        if (leftHeight > rightHeight)
        return leftHeight + 1;
        else
        return rightHeight + 1;
    }
    
    // Method to traverse the elements of a tree using BFS (level-order traversal) in recursive way
    public void recursiveBFS(Node root) {
        int h = height(root);
        for (int i = 0; i < h; i++)
        printNodesAtLevel(root, i, 0);
        
        /* 
        for (int i = 1; i <= h; i++)
        printNodesAtLevel(root, i, 1); 
        */
    }
    
    // Method to print nodes at the given level
    public void printNodesAtLevel (Node root, int level, int currentLevel) {
        if (root == null)
        return;
        if (level == currentLevel)
        System.out.print(root.data + " ");
        else {
            printNodesAtLevel(root.left, level, currentLevel + 1);
            printNodesAtLevel(root.right, level, currentLevel + 1);
        }
    }
    
    public static void main(String[] args) {
        Binary_Tree t1 = new Binary_Tree();
        Node root =  t1.new Node("A");
        
        root.left = t1.new Node("B");
        root.right = t1.new Node("C");
        root.left.right = t1.new Node("D");
        root.right.left = t1.new Node("E");
        
        System.out.println("In-Order DFS Traversal");
        t1.inOrderDFS(root);
        System.out.println();
        System.out.println("Pre-Order DFS Traversal");
        t1.preOrderDFS(root);
        System.out.println();
        System.out.println("Post-Order DFS Traversal");
        t1.postOrderDFS(root);
        System.out.println();
        System.out.println("Iterative BFS Traversal");
        t1.BFS(root);
        System.out.println("Recursive BFS Traversal");
        t1.recursiveBFS(root);
        System.out.println();
    }
}