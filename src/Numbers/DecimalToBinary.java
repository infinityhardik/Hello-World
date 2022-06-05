/* Let’s take an example to understand how this recursion works.

Let’s take the decimal to be 11.

1 + 10 * ( 11/2 ) % 2    [11 % 2 = 1]
1 + 10 * ( 5/2 ) % 2     [5 % 2 = 1]
0 + 10 * ( 2/2 ) % 2     [2 % 2 = 0]
1 + 10 * ( 1/2 ) % 2     [1 % 2 = 1] 

Thus, Binary of 11 is 1101

*/
package Numbers;
import java.util.Scanner;

public class DecimalToBinary
{
    static int decToBin(int n)
    {
        if (n == 0){
            return 0;
        }
        else {
            return n % 2 + (10 * (decToBin(n / 2)));
        }
    }
    
    public static void main(String args[])
    {
        int n;
        Scanner s = new Scanner(System.in);
        n = s.nextInt();
        System.out.println(decToBin(n) + "\n" );
        s.close();
    }
}