// Count No. of Words in a String
package BootCamp_Submissions;
import java.util.Scanner;

class Number_Of_Words
{
  public static void main(String args[])
  { 
    Scanner in = new Scanner(System.in);
    System.out.println("Number of Words in Sentence" + "\n");
    System.out.println("Enter a Sentence :");
    String str = in.nextLine();

    //Method 1 :
    int count = 0;
    for(int i = 0; i<str.length(); i++)
    {
      if(str.charAt(i)==' ' ){
        count++;
      }
    }
    if(str.charAt(str.length() - 1) != ' ') {
      count++;
    } 
    System.out.println("Number of Words in String = "+count);
    
    //Method 2 : using Split Function
    String arr[] = str.split(" ");
    System.out.println("Number of Words in String using Split Function = "+arr.length);
    in.close();
  }
} 
