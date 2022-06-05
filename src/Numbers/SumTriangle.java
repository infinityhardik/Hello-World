/* Solved by Me ! 
You are given an array of integers. You need to print the value of the topmost element of the 'sum triangle'.

The triangle will be formed such that the base level has all array elements. 
From there, at each level up, the number of elements is one less than the previous level, 
and elements at that level will be the sum of consecutive two elements in the previous level. */
/* 
For example:
Array arr =[10, 20, 30, 40]
Sum triangle:
[200] (explanation: 80+120 =200)
[80,120] (explanation: 30+50=80, 50+70=120)
[30,50,70]  (explanation: 10+20=30, 20+30=50, 30+40=70)
[10,20,30,40]

Output: 200 
*/

package Numbers;
import java.util.Arrays;
import java.util.Scanner;

public class SumTriangle {
	public static void main(String args[] ) throws Exception {
		Scanner sc= new Scanner(System.in);
		int n = sc.nextInt();
		int arr[]=new int[n];
		for(int i=0; i<n; i++){
			arr[i]=sc.nextInt();
		}
		System.out.println("The Array is : "+Arrays.toString(arr));
		System.out.println("The Answer for Sum Triangle is : "+sumTriangle(arr, 0, n-1));
		sc.close();
	}
	
	public static int sumTriangle(int arr[], int si, int ei){
		int sum = 0;
		
		// si = Start Index, ei = End Index:
		
		if(arr.length<=0){
			return -1;
		} else if(si==ei){
			return arr[0];
		} else {
			//Updating Array with sum values
			
			for(int i = 0; i<ei; i++){
				sum = arr[i] + arr[i+1];
				arr[i] = sum;
			}

			//Printing Updated Array
			
			for(int i=0;i<ei-1;i++){
				System.out.print(arr[i]+", ");
			}
			System.out.println(sum);
			return sumTriangle(arr, si, ei-1);
		}
		
	}
}