package BootCamp_Submissions.Recursion;
import java.util.Arrays;
import java.util.Scanner;

public class Recursion_MergeSort {
    
    public static void sort(int arr[], int l, int r){
        if(l<r){
            // 1st >> Dividing Array from Mid Point into individual elements
            int mid = l+ (r-l)/2;
            sort(arr, l, mid);
            sort(arr, mid+1, r);
            
            // 2nd >> Calling Merge Function 
            merge(arr, l, mid, r);
        }
    }
    
    public static void merge(int arr[], int l, int mid, int r){
        // Declaring New Arrays of Size n1 and n2
        int n1 = mid-l+1; //+1 to add in the range
        int n2 = r-mid;
        
        int L[] = new int[n1];
        int R[] = new int[n2];
        
        //Hard Copying Sorted Left Side of Array
        for (int i = 0; i < n1; i++) {
            L[i] = arr[l+i];
        }
        
        //Hard Copying Sorted Right Side of Array
        for(int j = 0; j < n2; j++){
            R[j] = arr[mid+1+j];
        }
        
        // The Left and Right are Individually Sorted Array but when combined are not Sorted. 
        // Ex: L[1,3,5,6,7] && R[2,4,8,9,10]
        
        // Initializing Left and Right Index Pointer
        int i=0, j=0; 
        // Initializing Combined Array Index Pointer
        int k=l;
        
        while(i<n1 && j<n2){
            if(L[i]<=R[j]){
                arr[k] = L[i];
                //Update Pointers
                i++; 
                k++;
            } else {
                arr[k] = R[j];
                //Update Pointers
                j++;
                k++;
            }
        }
        
        // Copying Remaining Elements from Left and Right Arrays
        while(i<n1){
            arr[k] = L[i];
            i++;
            k++;
        }
        
        while(j<n2){
            arr[k] = R[j];
            j++;
            k++;
        }
        
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
        System.out.println(Arrays.toString(arr));
        // Sorting and Printing
        sort(arr, 0, arr.length-1);
        System.out.println(Arrays.toString(arr));
        in.close();
    }
}
