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

    // Performs Left to Right Breadth First Search
    public void BFS(Node root){
        if(root != null){
            Queue<Node> q = new LinkedList<>();
            q.add(root);
            while (!q.isEmpty()) {
                Node temp = q.remove(); //Creating Temp Node to avoid multiple calls to Peek Function of Queues.
                System.out.print(temp.data+" ");
                if(temp.left!=null){
                    q.add(temp.left);
                }
                if(temp.right!=null){
                    q.add(temp.right);
                }                  
            }
            System.out.println();
        } else {
            System.out.println("Root is Null");
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
        System.out.println("BFS Traversal");
        t1.BFS(root);
    }
}