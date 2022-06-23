//Greatest Common Divisor using Recursion - solved by me !
/*
Approach :-
The GCD of two numbers does not change if the smaller number is subtracted from the larger number. 
This fact can be used in forming your recurrence relation.
You can also use the modulo operator instead of subtraction for a more efficient solution. 
*/
package Numbers; 
import java.util.Scanner;

public class RecursionGCD
{
    static int gcd(int x, int y)
    {
        int max = Math.max(x,y);
        int min = Math.min(x,y);
        if(max%min==0){
            return min;
        } else {
            max = max-min;
            min = min-max;
            return gcd(max,min);
        }
    }
    
    public static void main(String args[])
    {
        int x, y;
        Scanner s = new Scanner(System.in);
        x = s.nextInt();
        y = s.nextInt();
        
        System.out.println(gcd(x, y) + "\n" );
        s.close();
    }
}