/* 
Find kth Largest Element in a Stream
Given an infinite stream of integers, find the kth largest element at any point in time.

Input Format:
The first line contains an integer ‘N’ as the size of the stream.
The second line contains an integer ‘K’ representing the position of the largest number.
The third line contains elements of the stream of size ‘N’.

Sample Test Cases:

Input:
8
3
20 30 21 80 60 50 110 15

Output:
None
None
3 largest number is 20
3 largest number is 21
3 largest number is 30
3 largest number is 50
3 largest number is 60
3 largest number is 60

Input:
5
2
10 40 11 20 60

Output:
None
2 largest number is 10
2 largest number is 11
2 largest number is 20
2 largest number is 40
*/
package DSA_Assignment;
import java.util.Scanner;
import java.util.Stack;

public class LargestElement_in_a_Stream {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int stream[] = new int[n];
        for (int i = 0; i < n; i++) {
            stream[i] = sc.nextInt();
        }
        
        Stack<Integer> s = new Stack<Integer>();
        Stack<Integer> temp = new Stack<>();
        
        for(int i=0; i<n; i++){
            if(s.isEmpty()){
                s.push(stream[i]);
            }
            if(s.size()<=k){
                while (!s.isEmpty()) {
                    int v = s.pop();
                    while (!temp.isEmpty() && temp.peek() < v)
                    s.push(temp.pop());
                    temp.push(v);
                }
                //System.out.println(temp);
                // To check Stack at Each Iteration
            }
            
            if(temp.size()>k)
            {
                temp.pop();
            }
            
            if(i<k-1){
                System.out.println("None");
            } else {
                System.out.println(k+" largest number is "+temp.peek());
            }
            sc.close();
        }
    }
}

/* 
Explanations for First Sample Test Case:

As and when the stream of integers arrives, we can output the kth largest no. Here, the initial number of elements is 8 and we need to find the 3rd largest number at all times as and when the integers arrive in the stream. Let us see the stream at every iteration as and when the integers arrive:
1st iteration: 20

2nd iteration: 20 30

3rd iteration: 20 30 21

4th iteration: 20 30 21 80

5th iteration: 20 30 21 80 60

6th iteration: 20 30 21 80 60 50

7th iteration: 20 30 21 80 60 50 110

8th iteration: 20 30 21 80 60 50 110 15

*/