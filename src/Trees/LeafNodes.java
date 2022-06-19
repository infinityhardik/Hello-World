//Function to Count No. of Leaf Nodes. A node is a leaf node if its both left and right child nodes are NULL.
// Solved by Hardik Bhaavani
/* 
Sample Input:
7
20 8 4 22 12 10 14
Sample Output:
4

Sample Input:
6
3 4 2 5 7 1
Sample Output:
2
*/
package Trees;
import java.util.Scanner;

public class LeafNodes {
    static class Node  
    { 
        int data; 
        Node left, right; 
        
        public Node(int item)  
        { 
            data = item; 
            left = right = null; 
        } 
    } 
    
    static class BinaryTree  
    { 
        static Node root; 
        
        BinaryTree() {
            root = null;
        }
        
        // Function to insert in the BST 
        static void insert(int key) { 
            root = insertRec(root, key); 
        } 
        
        // A recursive function to insert a new key in BST
        static Node insertRec(Node root, int key) { 
            
            if (root == null) { 
                root = new Node(key); 
                return root; 
            } 
            
            if (key < root.data) 
            root.left = insertRec(root.left, key); 
            else if (key > root.data) 
            root.right = insertRec(root.right, key); 
            
            return root; 
        } 
        
        static int getLeafCount()  
        { 
            return getLeafCount(root); 
        } 
        
        static int getLeafCount(Node node)  
        { 
            if(node==null)
            return 0;
            
            if(node.left==null && node.right==null) 
            return 1;
            
            return getLeafCount(node.left) + getLeafCount(node.right);
        } 
        
        public static void main(String[] args)  
        { 
            
            Scanner sc = new Scanner(System.in);
            int size;	
            size = sc.nextInt();
            
            if(size<= 0){
                System.out.println("Size should be a positive integer");
            }
            
            else{
                int[] elementsArr = new int[size];
                for(int i = 0; i < size; i++){
                    elementsArr[i] = sc.nextInt();
                    insert(elementsArr[i]);
                }
                System.out.println("No. of Leaf Nodes in Tree : "+getLeafCount());
            }
            sc.close();
        } 
    }
}