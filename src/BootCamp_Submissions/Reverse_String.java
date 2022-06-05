//Example Input : abc , Output : cba

package BootCamp_Submissions;
import java.util.Scanner;

public class Reverse_String{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("String Reversal "+"\n");
        System.out.println("Enter a String Value :");
        String s = in.next();
        s = s.toLowerCase(); //for String Conversion to Lowercase
        String reverse1 = "";
        String reverse2 = "";
        
        for (int i = s.length()-1; i >= 0; i--) {
            reverse1 = reverse1 + s.charAt(i);
            // 1st Method > "<>" + c + b + a 
        }

        for (int i = 0; i <= s.length()-1; i++) {
            reverse2 = s.charAt(i) + reverse2;
            // 2nd Method > c + b + a + "<>"
        }
        System.out.println("Reverse String using 1st Method : " +reverse1);
        System.out.println("Reverse String using 2nd Method : " +reverse2);
        in.close();
    }
}