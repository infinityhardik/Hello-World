/*  
Given an array of pairs of integers, find all the symmetric pairs in it. 
Two pairs (a, b) and (c, d) are said to be symmetric if b is equivalent to c and a is equivalent to d.
For example, (10, 20) and (20, 10) are symmetric. It may be assumed that the first element in each pair is distinct. 

Note that in the output, you need to print only the first occurring pair out of the two symmetric pairs in the given array. For example, if (a, b) and (c, d) are symmetric, you will only print the one that occurs first in the given array.
Sample Test Cases:
Input:
5 
31 30 40 50 15 20 50 40 20 15
Output:
40 50
15 20

Input:
4
20 40 50 11 10 50 40 20 
Output:
20 40
*/
package DSA_Assignment;
import java.util.*;

public class SymmetricPairs {
    public static void symmetricPair(int[][] arr) {
        HashMap<Integer, Integer> pair = new HashMap<>();
        for(int i=0; i<arr.length; i++){
            int key = arr[i][0];
            int value = arr[i][1];
            if(pair.containsKey(value) && pair.get(value)==key){
                System.out.println(value+" "+key);
            } else {
                pair.put(key, value);
            }
        }
    }
    public static void main(String arg[]) {
        Scanner sc = new Scanner(System.in);
        int row = sc.nextInt();
        int arr[][] = new int[row][2];
        for(int i = 0 ; i < row ; i++){
            for(int j = 0 ; j < 2 ; j++){
                arr[i][j] = sc.nextInt();
            }
        }
        symmetricPair(arr);
        sc.close();
    }
}