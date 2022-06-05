package Dynamic_Programming;
import java.util.Scanner;
public class LongestCommonSubsequence
{
    
    public static int getLongestCommonSubsequence(String a, String b){
        
        int[][] matrix = new int[a.length()+1][b.length()+1];
        
        for(int i = 0; i <= a.length(); i++){
            for(int j = 0; j <= b.length(); j++){
                if(i == 0 || j == 0){
                    matrix[i][j] = 0;
                }else if(a.charAt(i-1) == b.charAt(j-1)){
                    matrix[i][j] = 1 + matrix[i-1][j-1] ;
                }else{
                    matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
                }
            }
        }
        
        return matrix[a.length()][b.length()];
    }
    
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Two Strings");
        String s1 = sc.next();
        sc.nextLine();
        String s2 = sc.next();
        System.out.println("Length of LCS is" + " " + getLongestCommonSubsequence(s1, s2) );
        sc.close();
    }
    
}


