/* 
Reverses the Number 
Example Input : 12345
Output : 54321
*/

package BootCamp_Submissions;
import java.util.Scanner;

public class Reverse_Number{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Reverses the Integer Value" + "\n");
        System.out.println("Enter Integer Value :");
        int number = in.nextInt();
        int reverse = 0;
        while(number!=0){
            int remainder = number%10;
            reverse = reverse*10 + remainder;
            number = number/10;
        }
        System.out.println("Reverse Number : " + reverse);
        in.close();
    }
}

/* Flow Logic for Example : 12345
reverse = 0

1st Iteration : 
number = 12345
remainder = 12345 % 10 = 5
reverse = 0*10 + 5 = 5
number = 12345 / 10 = 1234


2nd Iteration :
number = 1234
remainder = 1234 % 10 = 4
reverse = 0*10 + 5 = 54
number = 1234 / 10 = 123
*/