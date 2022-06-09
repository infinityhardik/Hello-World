package Trees;

public class Binary_Search_Tree {
    
    static class TreeNode {
        TreeNode left, right; 
        int data;
        
        TreeNode(int data) {
            this.data = data;
        }
    }
    
    static TreeNode recInsert(TreeNode root, int data) {
        if(root == null) {
            return new TreeNode(data);
        }
        
        if(root.data > data) {
            root.left = recInsert(root.left, data);
        } else {
            root.right = recInsert(root.right, data);
        }
        
        return root;
    }
    
    static void inorder(TreeNode root) {
        if(root == null) {
            return ;
        }
        
        inorder(root.left);
        System.out.print(root.data+" ");
        inorder(root.right);
    }

    static TreeNode insertIter(TreeNode root, int data) {
        if(root == null) {
            return new TreeNode(data);
        }
        
        TreeNode prev = null;
        TreeNode curr = root;
        
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
            prev.left = new TreeNode(data);
        } else {
            prev.right = new TreeNode(data);
        }
        
        return root;
    }
    public static void main(String args[]) {
        int arr[] = {10, 30, 50, 5, 15, 3};
        TreeNode root = null;
        for(int i =0; i < arr.length; i++) {
            //root = recInsert(root, arr[i]);
            root = insertIter(root, arr[i]);
        }
        inorder(root);
    }
}
