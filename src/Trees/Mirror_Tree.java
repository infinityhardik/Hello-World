/* 
You are given a binary tree. You are required to convert this binary tree into its mirror image.  

Sample Input:
5
1 2 3 4 5
Sample Output:
1 3 2 5 4

Sample Input:
6
6 9 8 7 4 5
Sample Output:
6 8 5 9 4 7

*/
package Trees;
import java.util.Scanner;

public class Mirror_Tree {
    
    static class Node {
        int data;
        Node left, right;
        
        Node(int value) {
            data = value;
            left = right = null;
        }
    }
    
    static class Tree {
        
        static Node root;
        Tree() {
            root = null;
        }
        
        // Method to construct a binary tree from the given array
        public static Node insertNode(int[] elementsArr, Node node, int i) {
            if(i < elementsArr.length){
                node = new Node(elementsArr[i]);
                node.left = insertNode(elementsArr,node.left,2 * i + 1);
                node.right = insertNode(elementsArr,node.right,2 * i + 2);
            }
            return node;
        }
        
        // Method to print the tree in pre-order traversal
        static void preOrderDFS(Node node) {
            if (node == null)
            return;
            
            System.out.print(node.data + " ");
            preOrderDFS(node.left);
            preOrderDFS(node.right);
        }
        
        // Method to convert a given binary tree into its mirror image
        public static void mirror(Node node) {
            if(node==null){
                return;
            }
            mirror(node.left);
            mirror(node.right);
            
            // Swap can be made before recursion too, i.e., after If Statement 
            Node temp = node.left;
            node.left = node.right;
            node.right = temp;
            
            // Solved by Hardik Bhaavani
        }
    }
    
    public static void main(String[] x) {
        int size;
        Scanner sc = new Scanner(System.in);
        size = sc.nextInt();
        
        if(size <= 0){
            System.out.println("Size should be a positive integer");
        }
        
        else{
            int[] elementsArr = new int[size];
            for(int i = 0; i < size; i++) {
                elementsArr[i] = sc.nextInt();
            }
            
            Tree.root = Tree.insertNode(elementsArr, Tree.root, 0);
            
            Tree.mirror(Tree.root);
            
            Tree.preOrderDFS(Tree.root);
            sc.close();
        }
    }
}


