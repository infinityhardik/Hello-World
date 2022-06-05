package Searching_Algorithms;
import java.util.Arrays;
import java.util.Scanner;

public class LinearSearch {

    public static int linearSearch(int[] arr, int key) {

        int size = arr.length;
        for (int i = 0; i < size; i++) {
            if (arr[i] == key) {
                return i;
            }
        }
        //This is the default value if the key is not found in the array.
        return -1;
    }
    public static void main(String a[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Array Length: ");
        int n = in.nextInt();
        int arr[] = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i]=in.nextInt();
        }       
        System.out.println(Arrays.toString(arr));
        System.out.println("Enter Search Key : ");
        int key = in.nextInt();
        System.out.println("Key "+key+"'s  position is : " + linearSearch(arr, key));
        in.close();
    }
}
