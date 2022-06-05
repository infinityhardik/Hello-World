/* Write a program to print out all Armstrong numbers between 1 and 500. If sum of cubes of 
each digit of the number is equal to the number itself, then the number is called an Armstrong number.

For example, 153 = ( 1 * 1 * 1 ) + ( 5 * 5 * 5 ) + ( 3 * 3 * 3 ) */
package BootCamp_Submissions;

public class Armstrong_Numbers
{
    public static void main(String[] args) {
        System.out.println("Armstrong Number Check from 1 to 500 :"+"\n");
        System.out.println("List :");
        for (int i = 1; i <= 500; i++) {
            int number = i;
            int product = 0; int sum = 0; int remainder = 0; 
            while(sum<=i && number!=0){
                remainder = number%10;
                product = remainder*remainder*remainder;
                sum = sum + product;
                number = number/10;
            }
            if (sum==i){
                System.out.println(i);
            }
        }
    }
}