/* 
Given an array of integers, find the most frequent element in the array. 
If multiple elements appear a maximum number of times, print any one of them. 
Return -1 in case there are no elements. 

Sample Test Cases:
Input:
8
1 3 2 5 2 1 9 2
Output:
2

Input:
8
10 15 12 11 13 12 11 11
Output:
11
*/

package DSA_Assignment;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class MostFrequentElement {
    public static int mostFrequentElement(int[] arr) {
        HashMap<Integer, Integer> frequency = new HashMap<>();
        for(int i = 0; i<arr.length; i++){
            if(frequency.containsKey(arr[i])){
                frequency.put(arr[i], frequency.get(arr[i])+1);
            } else {
                frequency.put(arr[i], 1);
            }
        }
        
        //Running a For Each Loop
        int maxCount = 0;
        int elem = -1;
        for(Map.Entry<Integer,Integer> pair : frequency.entrySet()){
            if(maxCount<pair.getValue()){
                maxCount=pair.getValue();
                elem = pair.getKey();
            }
            
        }
        if(maxCount>1){
            return elem;
        } else {
            return -1;
        }
    }
    public static void main(String[] args) {
        int n;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        int arr[] = new int[n];
        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }
        System.out.println(mostFrequentElement(arr));
        sc.close();
    }
}