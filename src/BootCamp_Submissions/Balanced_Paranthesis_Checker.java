// Solved by Hardik Bhaavani in Live Class >> Achievement = First to Solve

/* 
Balanced Paranthesis has Equal Number of ( and ) brackets. 
() is a Balanced Paranthesis
((())) is a Balanced Paranthesis
)() is not a Balanced Paranthesis
*/

package BootCamp_Submissions;
import java.util.Scanner;

public class Balanced_Paranthesis_Checker {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in); 
        System.out.println("Enter String :");
        String str = in.nextLine();
        int leftPar = 0, rightPar = 0;

        for(int i=0; i<str.length();i++){
            if(str.charAt(i)=='('){
                leftPar++;
            }
            if(str.charAt(i)==')'){
                rightPar++;
            }
            if(rightPar>leftPar){
                break;
            }
        }

        if(leftPar==rightPar){
            System.out.println("Balanced Paranthesis");
        } else {
            System.out.println("< Not Balanced ! > Paranthesis");
        }

        in.close();
    }    
}
