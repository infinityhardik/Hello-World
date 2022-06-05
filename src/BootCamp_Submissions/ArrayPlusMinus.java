package BootCamp_Submissions;

import java.util.Arrays;

public class ArrayPlusMinus {
    public static void main(String[] args) {
        int arr[] = {2,-1,-3,4,7,-10,5};
        int newArr[] = new int[arr.length]; 
        
        int i=0; int j=0;
        
        while (i<arr.length) {
            if(arr[i]>0){
                newArr[j] = arr[i];
                j++;
            }
            i++;
        }
        i=0;
        while (i<arr.length && j<arr.length) {
            if(arr[i]<0){
                newArr[j] = arr[i];
                j++;
            }
            i++;
        }
        
        System.out.println(Arrays.toString(arr));
        System.out.println(Arrays.toString(newArr));
    }
}
