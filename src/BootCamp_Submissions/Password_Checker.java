package BootCamp_Submissions;
import java.util.Scanner;

public class Password_Checker {
    public static final int PASSWORD_LENGTH = 8;
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        
        System.out.print(
        "1. A Password must have at least 8 characters.\n" +
        "2. A Password consists of ONLY letters and digits.\n" +
        "3. A Password must contain at least 2 digits. \n" +
        "Input a password >> (You are agreeing to the above Terms and Conditions.) : ");
        System.out.println();

        String s = input.nextLine();
        
        if (is_Valid_Password(s)) {
            System.out.println("Password is Valid: " + s);
        } else {
            System.out.println("Not a Valid Password: " + s);
        }
        input.close();
    }
    
    public static boolean is_Valid_Password(String password) {
        
        if (password.length() < PASSWORD_LENGTH) return false;
        
        int charCount = 0;
        int numCount = 0;
        for (int i = 0; i < password.length(); i++) {
            char ch = password.charAt(i);

            if (is_Numeric(ch)) numCount++;
            else if (is_Letter(ch)) charCount++;
            else return false;
        }
        return (charCount >= 2 && numCount >= 2);
    }
    
    //Alphabet Letter Check
    public static boolean is_Letter(char ch) {
        return ((ch >= 'A' && ch <= 'Z')||((ch >= 'a' && ch <= 'z')));
    }
    
    //Numeric Digit Check
    public static boolean is_Numeric(char ch) {
        return (ch >= '0' && ch <= '9');
    }
}
