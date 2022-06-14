/* 
Description :-
You are given a binary tree. You need to print all the nodes which are multiples of root node. 
The nodes which are multiples of the root node should be printed using in-order traversal. 

Sample Input:
5
3 4 5 6 7 
Sample Output:
6 3

Sample Input:
4
0 1 2 3
Sample Output:
Division by zero is undefined

Sample Input:
5
4 12 3 8 55
Sample Output:
8 12 4

*/
package Trees;
import java.util.Scanner;

public class BT_printMultiplesOfRoot {
    static class Node{
        int data;
        Node left,right;
        
        Node(int value) {
            data = value;
            left = right = null;
        }
    }
    
    static class Tree{
        Node root;
        
        Tree() {
            root = null;
        }
        
        // Method to construct a binary tree from the given array (Do not edit the code given below)
        public Node insertNode(int[] elementsArr, Node node, int i){
            if(i < elementsArr.length){
                node = new Node(elementsArr[i]);
                node.left = insertNode(elementsArr,node.left,2 * i + 1);
                node.right = insertNode(elementsArr,node.right,2 * i + 2);
            }
            return node;
        }
        
        // Method to print nodes that are multiple of root node
        public void printNodes(Node node){
            if(node==null){
                return ;
            }
            if(root.data==0){
                System.out.println("Division by zero is undefined");
                System.exit(0);
            }
            printNodes(node.left);
            if(node.data%root.data==0){
                System.out.print(node.data+" ");
            }
            printNodes(node.right);
        }
        
        public static void main(String[] x){
            Tree tree = new Tree();
            
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
                }
                tree.root = tree.insertNode(elementsArr,tree.root,0);
                tree.printNodes(tree.root);
            }
            sc.close();
        }
    }
}
    