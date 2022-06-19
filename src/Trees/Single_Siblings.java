/*
//Function to print nodes that dont have a Sibling. A sibling is a node that has the same parent.
// Solved by Hardik Bhaavani
Sample Input:
6
5 2 8 1 4 3
Sample Output:
3

Sample Input:
7
22 1 45 27 19 41 3
Sample Output:
19 3 27 41 
*/
package Trees;
import java.util.Scanner;

public class Single_Siblings {
    
    static class Node { 
        int data; 
        Node left, right; 
        
        Node(int value) { 
            data = value; 
            left = right = null; 
        } 
    } 
    
    static class BinaryTree { 
        static Node root;
        
        BinaryTree() {
            root = null;
        }
        
        void insert(int key) { 
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
        
        //Function to print nodes that dont have a sibling 
        static void printSingles(Node node) { 
            if(node==null){
                return;
            }
            if(node.left!=null && node.right==null){
                System.out.print(node.left.data+ " ");
            } else if(node.right!=null && node.left==null){
                System.out.print(node.right.data+ " ");
            }
            
            printSingles(node.left);
            printSingles(node.right);
            
        }
        
        public static void main(String args[]) { 
            BinaryTree tree = new BinaryTree(); 
            
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
                    tree.insert(elementsArr[i]);
                }
                printSingles(root); 
            }
            sc.close();
        }    
    }
}
