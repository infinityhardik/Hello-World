package Trees;

import java.util.Scanner;

public class Binary_Search_Tree {
    static class Node {
        Node left, right; 
        int data;
        Node(int data) {
            this.data = data;
        }
    }
    
    // Whenever a new node is added to a BST, it has to be added as a leaf node. It cannot be an internal node. 
    // Adding a Node to the BST in O(Log n) Time Complexity.
    static Node recInsert(Node root, int data) {
        if(root == null) {
            return new Node(data);
            // Equivalent to >> node = new Node(key); return node;
        }
        
        if(root.data > data) {
            root.left = recInsert(root.left, data);
        } else {
            root.right = recInsert(root.right, data);
        }
        
        return root;
    }
    
    static void inorder(Node root) {
        if(root == null) {
            return ;
        }
        
        inorder(root.left);
        System.out.print(root.data+" ");
        inorder(root.right);
    }
    
    static Node insertIter(Node root, int data) {
        if(root == null) {
            return new Node(data);
        }
        
        Node prev = null;
        Node curr = root;
        
        while(curr != null) {
            if(curr.data > data) {
                prev = curr;
                curr = curr.left;
            }else {
                prev = curr;
                curr = curr.right;
            }
        }
        
        if(prev.data > data) {
            prev.left = new Node(data);
        } else {
            prev.right = new Node(data);
        }
        
        return root;
    }
    
    // Method to search for a node with given key in a BST
    static boolean search(Node node, int key) {
        if (node == null)
        return false;
        
        if (key == node.data)
        return true;
        
        if (key < node.data)
        return search(node.left, key);
        else
        return search(node.right, key);
    }
    
    // A recursive function to delete an existing key in BST
    static Node deleteRec(Node root, int data)
    {
        // Base Case: If the tree is empty
        if (root == null){
            return root;
        }
        
        // Otherwise, recur down the tree
        if (data < root.data){
            root.left = deleteRec(root.left, data);
        } else if (data > root.data){ 
            root.right = deleteRec(root.right, data);
        } else {
            // if key is same as root's key, then this is the node to be deleted
            
            // node with only one child or no child
            if (root.left == null){
                return root.right;
            } else if (root.right == null){
                return root.left;
            }
            
            
            // node with two children : Get the Inorder Successor (smallest in the right subtree)
            root.data = minValue(root.right);
            
            // Delete the inorder successor
            root.right = deleteRec(root.right, root.data);
        }
        
        return root;
    }
    
    // Getting the Inorder Successor (Smallest Value in the right subtree)
    static int minValue(Node root)
    {
        int minv = root.data;
        while (root.left != null)
        {
            minv = root.left.data;
            root = root.left;
        }
        return minv;
    }
    
    public static void main(String args[]) {
        // int arr[] = {10, 30, 50, 5, 15, 3};
        // root = recInsert(root, arr[i]);
        // root = insertIter(root, arr[i]);
        
        Scanner in = new Scanner(System.in);
        Node root = null;
        System.out.println("Enter No. of Elements to be inserted in BST :");
        int n = in.nextInt();
        for(int i =0; i < n; i++) {
            root = recInsert(root, in.nextInt());
        }
        inorder(root);
        System.out.println();
        System.out.println("Enter a Search Key : ");
        int key = in.nextInt();
        System.out.println(search(root, key));
        
        System.out.println("Enter a Deletion Element : ");
        int del = in.nextInt();
        deleteRec(root, del);
        inorder(root);
        
        in.close();
    }
}
