/* 
Question 2 : 
Write a pseudocode, flowchart and program for finding the simple interest using the expression(SI=PNR/100).  
*/

package BootCamp_Submissions;
import java.util.Scanner;

public class Simple_Interest{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Simple Interest Calculator" + "\n");
        System.out.println("Enter Principal Amount :");
        float p = in.nextFloat();
        System.out.println("Enter Rate of Interest :");
        float r = in.nextFloat();
        System.out.println("Enter Time in Years :");
        float n = in.nextFloat();
        float si = (p*n*r)/100;
        System.out.println("Simple Interest on "+p+" @ "+r+"% Interest Rate for "+n+" Years is = "+"\n"+si);
        System.out.println("Total Amount Payable = "+(p+si));
        in.close();
    }
}
/* Solved by Hardik Bhaavani */