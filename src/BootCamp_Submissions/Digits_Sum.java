/* 
Example Input : 123
Output = 1 + 2 + 3 = 6
*/
package BootCamp_Submissions;
import java.util.Scanner;

public class Digits_Sum{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Sum of Digits of Number" + "\n");
        System.out.println("Enter Integer Value :");
        int number = in.nextInt();
        int sum = 0;
        while(number!=0){
            int remainder = number%10;
            sum = sum + remainder;
            number = number/10;
        }
        System.out.println("Sum : " + sum);
        in.close();
    }
}