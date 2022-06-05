package Searching_Algorithms;
import java.util.Arrays;
import java.util.Scanner;
import Sorting_Algorithms.MergeSort;
// It requires an Ascending Sorted Array for functioning.

public class BinarySearch {
    
    public int binarySearch(int[] inputArr, int key) {
        
        int start = 0;
        int end = inputArr.length - 1;
        while (start <= end) {
            int mid = (start + end) / 2;
            if (key == inputArr[mid]) {
                return mid;
            }
            if (key < inputArr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1; // for Key Not Found
    }
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        BinarySearch mbs = new BinarySearch();
        System.out.println("Enter Array Length: ");
        int n = in.nextInt();
        int arr[] = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i]=in.nextInt();
        }       
        System.out.println("Enter Search Key : ");
        int key = in.nextInt();
        
        MergeSort.sort(arr); //Sorting the Array
        System.out.println(Arrays.toString(arr)); // Printing Sorted Array

        System.out.println("Key "+key+"'s  position is : " + mbs.binarySearch(arr, key));
        in.close();
    }
}
