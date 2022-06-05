/*
Question 1:
Write pseudocode, flowchart, and program to convert Fahrenheit to Celcius.
*/
package BootCamp_Submissions;
import java.util.Scanner;

public class Celsius_Converter{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Fahrenheit to Celsius Converter" + "\n");
        System.out.println("Enter Fahrenheit Value :");
        float fa_Val = in.nextFloat();
        System.out.println("It's "+(fa_Val-32)*5f/9f+" Degree Celsius !");
        in.close();
    }
}