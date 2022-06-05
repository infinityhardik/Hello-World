package BootCamp_Submissions.Recursion;
import java.util.Scanner;

/* 
Example Input  : 4
1 2 3 4
Output : 
20
8 12
3 5 7
1 2 3 4
*/

public class Recursion_SumTriangle {

	static void sumTriangle(int arr[]){
		if(arr.length==0){
			return;
		} else {
		
		int newArr[] = new int[arr.length-1];
		for(int i=0; i<newArr.length; i++){
			newArr[i] = arr[i]+arr[i+1];
		}
		
		sumTriangle(newArr);
		
		for(int i=0; i<arr.length; i++){
		System.out.print(arr[i]+" ");
		}

		System.out.println();
		}
	}

	public static void main(String args[] ) throws Exception {
	
		Scanner in = new Scanner(System.in);
		int n = in.nextInt();
		int arr[] = new int[n];
		for(int i=0; i<n; i++){
			arr[i] = in.nextInt();
		}

		sumTriangle(arr);
        in.close();
	}
}
/* Solved by Hardik Bhaavani */