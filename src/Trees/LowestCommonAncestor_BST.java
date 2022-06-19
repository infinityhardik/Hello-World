/*
Input :
1.) No. of Elements
2.) Elements
3.) N1
4.) N2

Sample Input:
15
12 6 18 3 9 15 20 1 11 19 10 18 31 4 21
3
10
Sample Output:
6

Sample Input:
5
8 7 15 2 20
7
2
Sample Output:
7
*/
package Trees;
import java.util.Scanner;

public class LowestCommonAncestor_BST {
    
    static class Node {
        int data;
        Node left, right;
        
        Node(int value) {
            data = value;
            left = right = null;
        }
    }
    
    static class BST {
        static Node root;
        
        BST() {
            root = null;
        }
        
        // Method to construct a binary tree from the given array
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
        
        // Function to find Lowest Common Ancestor of n1 and n2. The function assumes that both n1 and n2 are present in BST
        static Node lca(Node node, int n1, int n2)
        {
            if (node == null)
            return null;
            
            // If both n1 and n2 are smaller than root, then LCA lies in left
            if (node.data > n1 && node.data > n2)
            return lca(node.left, n1, n2);
            
            // If both n1 and n2 are greater than root, then LCA lies in right
            if (node.data < n1 && node.data < n2)
            return lca(node.right, n1, n2);
            
            return node;
        }
        
        public static void main(String[] x) {
            
            int size;
            Scanner sc = new Scanner(System.in);
            size = sc.nextInt();
            
            if(size>0){
                int[] elementsArr = new int[size];
                for(int i = 0; i < size; i++) {
                    elementsArr[i] = sc.nextInt();
                    BST.insert(elementsArr[i]);
                }
                
                int n1 = sc.nextInt();
                int n2 = sc.nextInt();
                
                Node lca = BST.lca(BST.root, n1, n2);
                System.out.print(lca.data);
            }
            else
            System.out.println("Size should be a positive integer");

            sc.close();
        }
    }
}
        
        