package Dynamic_Programming;
import java.util.Scanner;
public class CombinationsforCoinExchange {
  	  public static int count(int[] d, int amount) {
        
        int[][] V = new int[amount + 1][d.length];
        
        /* Write down the base solution*/ 
        for(int i=0;i<=amount;i++){
        V[i][0]=1;
        }
        for(int j=0;j<d.length;j++){
        V[0][j]=1;
        }
        /* Fill in the rest of the matrix using recursion relation */
        for (int i=1;i<=amount;i++){
            for(int j=1;j<d.length;j++){
                if(i<d[j]){
                    V[i][j]=V[i][j-1];
                }else if(i==d[j]){
                    V[i][j]=V[i][j-1] + 1;
                } else {
                    V[i][j]=V[i-d[j]][j]+V[i][j-1];
                }
            }
        }
        for (int i=0;i<=amount;i++){
            for(int j=0;j<d.length;j++){
         System.out.print(V[i][j]);
            }
            System.out.println();
        }
        
        return V[amount][d.length-1];
      }
   
      public static void main(String args[]) {
        int[] d = {1,5,7,10};
        Scanner scan = new Scanner(System.in);
        int amount = scan.nextInt();
        System.out.println(count(d, amount));
    	scan.close();
    }
}

/*Problem Statement :-
Given an unlimited supply for few denominations  [1,5,7,10] and an amount n, 
your code should output the number of ways the amount can be paid from the given denominations.  

The input should have the amount n of which you have to find the number of ways.
The output should print the value of number of ways the amount can be paid. 
Sample Input
20
Sample Output
15

Sample Input
12
Sample Output
6
*/

/*So, let’s say you have an unlimited supply of coins in four denominations — 
d1=1,d2=5,d3=7,d4=10. 
If you are asked to make an amount of 11, you can use the following combinations:
11 coins of value 1
10 + 1
7 + 1 + 1 + 1 + 1
5 + 1 + 1 + 1 + 1 +1+1
5 + 5 + 1
Thus, you can pay for 11 currency values in 5 ways, provided that you have the coins 1, 5, 7 and 10.
However, if you have the coins of values 1, 5 and 7 only then you can pay for 11 currency values in 4 ways 
(combination 10+1 cant be used).
*/
