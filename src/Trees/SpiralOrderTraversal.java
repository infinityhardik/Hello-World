/* 
Sample Input:
9
1 2 3 4 5 6 7 8 9
Sample Output:
1 2 3 7 6 5 4 8 9

Sample Input:
6
23 6 8 0 2 65
Sample Output:
23 6 8 65 2 0

Sample Input:
5
1 2 3 4 5
Sample Output:
1 2 3 5 4
*/
package Trees;
import java.util.Scanner;

public class SpiralOrderTraversal {
    public static void main(String[] args) {
        Tree tree = new Tree();
    
        int size;
        Scanner sc = new Scanner(System.in);
        size = sc.nextInt();
        
        if (size <= 0){
            System.out.println("Size should be a positive integer");
        }
        
        else{
            int[] elementsArr = new int[size];
            for(int i = 0; i < size; i++) {
                elementsArr[i] = sc.nextInt();
            }
            
            tree.root = tree.insertNode(elementsArr, tree.root, 0);
            
            tree.spiralOrder();
            sc.close();
        }
    }
}

class Node {
    int data;
    Node left, right;

    Node(int value) {
        data = value;
        left = right = null;
    }
}

class Tree {
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

    // Method to calculate height of a tree
    int height(Node root) {
        if (root == null)
            return 0;
        int leftHeight = 1 + height(root.left);
        int rightHeight = 1 + height(root.right);

        if (leftHeight > rightHeight)
            return leftHeight;
        else
            return rightHeight;
    }

    // Method to traverse the elements of a tree using BFS (level-order traversal) in the spiral order
    void spiralOrder() {
        int h = height(root);
        boolean ltr = false; // print second level in the left-to-right order
        for (int i = 1; i <= h; i++) {
            printNodesAtLevel(root, i, 1, ltr);
            ltr = !ltr;
        }
    }

    // Method to print nodes at the given level
    void printNodesAtLevel (Node root, int level, int currentLevel, boolean ltr) {
        if (root == null)
            return;
        if (level == currentLevel)
            System.out.print(root.data + " ");
        else {
            if (ltr) {
                printNodesAtLevel(root.left, level, currentLevel + 1, ltr);
                printNodesAtLevel(root.right, level, currentLevel + 1, ltr);
            } else {
                printNodesAtLevel(root.right, level, currentLevel + 1, ltr);
                printNodesAtLevel(root.left, level, currentLevel + 1, ltr);
            }
        }
    }
}

