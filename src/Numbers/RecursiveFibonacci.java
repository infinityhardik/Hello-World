package Numbers;
import java.util.Scanner;
public class RecursiveFibonacci {

    public int fibonacci(int n) {
        if (n < 2)
            return n;
        else
            return (fibonacci(n - 1) + fibonacci(n - 2));
    }
    

    public static void main(String args[]) {
        System.out.println("Enter the fibonacci number to be generated : ");
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        RecursiveFibonacci sequence = new RecursiveFibonacci();
        int number = sequence.fibonacci(n);
        System.out.println("Fibonacci number:  " + number);
        sc.close();
    }
}
