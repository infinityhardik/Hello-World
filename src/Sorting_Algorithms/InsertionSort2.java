package Sorting_Algorithms;

import java.util.Arrays;

public class InsertionSort2 {
    
    // Insertion sort
    public static void main(String args[]) {
        int arr[] = {6, 2, 10, 1, 5};
        
        int n = arr.length;
        
        for(int i = 1; i < n; i++) {
            
            for(int j = i; j > 0; j--) {
                
                if(arr[j-1] > arr[j]) {
                    int temp = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = temp;
                }
                else
                {
                    break;
                }
                
            }
        }
        System.out.println(Arrays.toString(arr));
        
    }
}