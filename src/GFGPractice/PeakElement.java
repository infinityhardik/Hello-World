package GFGPractice;
import java.util.Scanner;
public class PeakElement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        
        System.out.println("Peak Element Index in Array is : "+peakElement(a,n));
        sc.close();
    }

    public static int peakElement(int[] arr,int n)
    {
        int left = 0, right = n-1;
        while(left < right){
            int mid = left + (right - left)/2;
            if(arr[mid] < arr[mid+1])  left = mid + 1; 
            else  right = mid; 
        }
        return left;
    }
}

/* 
An element is called a peak element if its value is not smaller than the value of its adjacent elements(if they exists).
Input: 
N = 3
arr[] = {1,2,3}
Possible Answer: 2

Input:
N = 2
arr[] = {3,4}
Possible Answer: 1
*/