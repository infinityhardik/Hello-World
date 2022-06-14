package Trees;

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
    }
}