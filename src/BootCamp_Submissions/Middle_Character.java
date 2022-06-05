/* 
Write a Java method to display the middle character of a string. 
Note:   
a) If the length of the string is odd there will be one middle character.
b) If the length of the string is even there will be two middle characters.

Test Data:
Input a string: 350
Expected Output:
The middle character in the string: 5 
*/
package BootCamp_Submissions;
import java.util.Scanner;

class Middle_Character
{
    public static void main(String args[])
    { 
        Scanner in = new Scanner(System.in);
        System.out.println("Middle Character of String");
        System.out.print("Input a String: ");
        String str = in.nextLine();
        mid_Char(str);
        in.close();
    }

    public static void mid_Char(String str){
        if(str.length()%2==0){
            System.out.println("The Length of String is Even. Hence there will be 2 middle characters :");
            System.out.println("The middle character in the string = " +str.charAt((str.length()/2)-1));
            System.out.println("The middle character in the string = " +str.charAt(str.length()/2));
        } else {
            System.out.println("The middle character in the string = " +str.charAt(str.length()/2));
        }
    }
}
/* Solved by Hardik Bhaavani */