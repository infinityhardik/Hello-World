package BootCamp_Submissions;
import java.util.Scanner;

public class Vowel_Counter{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Vowel Counter "+"\n");
        System.out.println("Enter a String Value :");
        String s = in.next();
        int count = 0;
        s = s.toLowerCase(); //for String Conversion to Lowercase
        for (int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' || s.charAt(i) == 'o' || s.charAt(i) == 'u'){
                //Vowels
                System.out.println(s.charAt(i));
                count++;
            }
        }
        System.out.println(count);
        in.close();
    }
}