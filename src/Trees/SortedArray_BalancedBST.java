/* 
Create a Balanced BST with a given sorted array in order to have logarithmic performance in BST for Sorted Insertion Order.
*/
package Trees;

public class SortedArray_BalancedBST{
    static class Node {
        int data;
        Node left, right;
        
        Node(int d) {
            data = d;
            left = right = null;
        }
    }
    
    static class BinaryTree {
        static Node root;
        
        // A function that constructs Balanced Binary Search Tree from a sorted array
        static Node sortedArrayToBST(int arr[], int start, int end) {
            
            if (start > end) {
                return null;
            }
            
            /* Get the middle element and make it root */
            int mid = (start + end) / 2;
            Node node = new Node(arr[mid]);
            
            // Recursively construct the left subtree and make it left child of root
            node.left = sortedArrayToBST(arr, start, mid - 1);
            
            // Recursively construct the right subtree and make it right child of root
            node.right = sortedArrayToBST(arr, mid + 1, end);
            
            return node;
        }
        
        static void preOrder(Node node) {
            if (node == null) {
                return;
            }
            System.out.print(node.data + " ");
            preOrder(node.left);
            preOrder(node.right);
        }
        
        public static void main(String[] args) {
            int arr[] = new int[]{1, 2, 3, 4, 5, 6, 7};
            int n = arr.length;
            root = sortedArrayToBST(arr, 0, n - 1);
            System.out.println("Preorder traversal of constructed BST");
            preOrder(root);
        }
    }
}
/* 

Preorder traversal of constructed BST
4 2 1 3 6 5 7 

Tree representation of above output:
     4  
 2      6
1  3  5   7

*/