package BootCamp_Submissions.Recursion;
import java.util.Arrays;
import java.util.Scanner;

public class Recursion_BinarySearch {
    
    public static int Search(int arr[], int l, int r, int x){
        if(l<=r){
            int mid = l + (r-l)/2;
            /* Do not do >> (l+r)/2 
            because for Larger Values of Int like 2^31-1, 
            Addition of 2 values with ^31 will result into an Index Out of Bounds Exception for Integer Values */
            
            //If Element is found at Mid Index
            if(arr[mid] == x){
                return mid;
            }
            
            if(arr[mid]>x){
                //If Mid Element is greater than search element
                return Search(arr, l, mid-1, x);
            } else {
                //If Mid Element is greater than search element
                return Search(arr, mid+1, r, x);
            }
            
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Array Size :");
        int n = in.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter Array Elements :");
        for(int i=0; i<n; i++){
            arr[i] = in.nextInt();
        }
        System.out.println("Enter Search Element :");
        int x = in.nextInt();
        Arrays.sort(arr);
        int search = Search(arr, 0, arr.length-1, x);
        if(search == -1){
            System.out.println("Element Not Found !");
        } else {
            System.out.println("Found at Index : " +search);
        }
        in.close();
    }
}
