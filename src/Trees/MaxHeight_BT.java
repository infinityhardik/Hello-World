/* 
You are given a binary tree. You need to print the maximum height of the binary tree. 
If the tree is NULL (empty tree), print the height of the tree as 0.
Sample Input:
5
1 2 3 4 5
Sample Output:
3

Sample Input:
0
Sample Output:
0 
*/
package Trees;
import java.util.Scanner;

public class MaxHeight_BT {
    
    static class Node {
        int data;
        Node left, right;
        
        Node(int value) {
            data = value;
            left = right = null;
        }
    }
    
    static class Tree {
        Node root;
        
        Tree() {
            root = null;
        }
        
        // Method to construct a binary tree from the given array
        public Node insertNode(int[] elementsArr, Node node, int i) {
            if(i < elementsArr.length){
                node = new Node(elementsArr[i]);
                node.left = insertNode(elementsArr,node.left,2 * i + 1);
                node.right = insertNode(elementsArr,node.right,2 * i + 2);
            }
            return node;
        }
        
        // Method to find the height of a binary tree
        public int findHeight(Node node) {
            if(node==null){
                return 0;
            } else {
                //Computing the depth of each subtree.
                
                //Here, we need to do +1 to keep adding to the Height of Tree while in Recursion.
                
                int leftDepth = findHeight(node.left) +1;
                int rightDepth = findHeight(node.right) +1;

                //Using the Depth which is the Largest/Farthest/Greatest of the Left or Right.
                return leftDepth>rightDepth ? leftDepth:rightDepth;
            }
        }
        
        public static void main(String[] x) {
            Tree tree = new Tree();
            
            int size;
            Scanner sc = new Scanner(System.in);
            size = sc.nextInt();
            if (size < 0){
                System.out.println("Size should be a positive integer");
            }
            
            else{
                int[] elementsArr = new int[size];
                for(int i = 0; i < size; i++) {
                    elementsArr[i] = sc.nextInt();
                }
                
                tree.root = tree.insertNode(elementsArr, tree.root, 0);
                
                System.out.println("Max Height of Tree : "+tree.findHeight(tree.root));
            }
            sc.close();
        }
    }
}
