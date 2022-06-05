package Numbers;
import java.util.Scanner;
public class DigitsInWords{
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.println("Hello World");
    System.out.println("Enter Value : ");
    int x1 = input.nextInt();
    int tenthousand = x1/10000, thousand = (x1%10000)/1000, hundreds = (x1%1000)/100, ten = (x1%100)/10, one = (x1%10);
    System.out.println("Ten Thousand = "+tenthousand);
    System.out.println("Thousand = "+thousand);
    System.out.println("Hundred = "+hundreds);
    System.out.println("Ten = "+ten);
    System.out.println("One = "+one);
    input.close();
  }
}