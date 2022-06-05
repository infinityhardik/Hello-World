package Dynamic_Programming;
import java.util.Scanner;
class FibonacciSeries {
    static int fib(int n) {
        /* Declare an array to store Fibonacci numbers */
        /* Assign the 0th, 1st, and 2nd numbers of the Fibonacci series to 0, 1, and 2 respectively */
        if(n==0){
            return 0;
        } 
        else if (n==1){
            return 1;
        } 
        else{
            /* Add the previous three numbers in the series, and store them */
            int arr[] = new int[n];
            arr[0]=0; arr[1]=1;
            for(int i=2;i<n;i++){
                arr[i]=arr[i-1]+arr[i-2];
            }
            
            //Map for Fibonacci Series
            for (int i = 0; i < arr.length; i++) {
                System.out.print(arr[i]+" ");            
            }
            System.out.println();

            /* Return the nth element in the series */
            return arr[n-1];
        }
    }
    
    public static void main(String args[])
    {
        Scanner scan = new Scanner(System.in);
        // Enter the number n
        int n = scan.nextInt();
        System.out.println(fib(n));
        scan.close();
    }
}