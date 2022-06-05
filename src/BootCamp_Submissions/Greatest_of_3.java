/* 
Question : Take three input from the user and print the greatest number .
*/
package BootCamp_Submissions;
import java.util.Scanner;

public class Greatest_of_3{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Greatest of 3 Different Numbers" + "\n");
        System.out.println("Enter 3 Different Numbers :");
        double a = in.nextDouble();
        double b = in.nextDouble();
        double c = in.nextDouble();

        if(a>b && a>c){
            System.out.println(a+" is Greater than "+b+" & "+c+ " i.e., A>B & A>C");
        } else if(b>a && b>c) {
            System.out.println(b+" is Greater than "+a+" & "+c+ " i.e., B>A & B>C");
        } else if(c>a && c>b) {
            System.out.println(c+" is Greater than "+a+" & "+b+ " i.e., C>A & C>B");
        } else {
            System.out.println("Some of the Numbers are Equal to Another Number");
        }

        in.close();
    }
}
/* Solved by Hardik Bhaavani */