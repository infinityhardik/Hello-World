/* 
Write a program that generates a random number and asks the user to guess what the number is. 
If the user's guess is higher than the random number, the program should display "Too high, try again." 
If the user's guess is lower than the random number, the program should display "Too low, try again." 
The program should use a loop that repeats until the user correctly guesses the random number.
*/

package BootCamp_Submissions;
import java.util.Random;
import java.util.Scanner;

public class Random_Number_Guess{
    public static void main(String[] args) {
        System.out.println("Random Number Guess Game " + "\n");
        Scanner in = new Scanner(System.in);
        Random random = new Random();
        System.out.println("Enter Maximum Value for Random Number Generation :");
        int max = in.nextInt();
        while(true){
            int number = random.nextInt(max+1);
            System.out.println("Random Number Generated, Now Enter Your Input :");
            int input = in.nextInt();
            if(number == input){
                System.out.println("Correct Guess because Random Number generated is : "+number);
                break;
            } else if (input>number) {
                System.out.println("Random Number : "+number);
                System.out.println("Too high, try again.");
            } else if (input<number){
                System.out.println("Too low, try again.");
            }
            
        } 
        in.close();
    }
}
/* Solved by Hardik Bhaavani */