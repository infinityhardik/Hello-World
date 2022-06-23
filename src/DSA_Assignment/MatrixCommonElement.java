/* 
Given an M x N matrix of integers, 
find all the common elements that are present in all rows of the given matrix in O(M * N) time.

For example, take a look at the matrix given below.
11 12 11 14 18
13 17 18 15 11
18 17 17 13 11
18 11 12 17 19

In this matrix, 11 and 18 appear in each row. Hence, 11 and 18 will be the common elements that are present in each row.

Note that if multiple common elements are present in each row, you need to print them in ascending order.

Input:
4 4
17 12 11 10 
13 17 10 15
10 17 17 13
12 11 10 17

Output:
10 17
*/
package DSA_Assignment;
import java.util.*;

public class MatrixCommonElement {
    public static void printElementInAllRows(int mat[][]) {
        // Comments are for Debugging the code
        HashMap<Integer, Integer> common = new HashMap<>();
        
        //Putting Values in HashMap for First row
        for(int i=0; i<mat[0].length;i++){
            //System.out.print(mat[0][i]+" ");
            common.put(mat[0][i],1);
            //System.out.println(common.get(mat[0][i]));
        }
        
        for(int i=1; i<mat.length;i++){
            for(int j=0; j<mat[i].length; j++){
                //System.out.print(mat[i][j]+ " ");
                // Modifying Values based on each row of 2D array only if the Value of Map is Equal to Row. 
                // This means that each row needs a value update only once in order to avoid duplicates in a single row.
                if(common.containsKey(mat[i][j]) && common.get(mat[i][j])==i){
                    common.replace(mat[i][j], (common.get(mat[i][j])+1));
                }
            }
            //System.out.println();
        }
        
        //System.out.println(common);
        ArrayList<Integer> arr = new ArrayList<Integer>();
        
        for (HashMap.Entry<Integer,Integer> entry : common.entrySet()){
            if(entry.getValue()==mat.length){
                //System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());
                arr.add(entry.getKey());
            }
        }
        
        //System.out.println(arr);
        Collections.sort(arr);
        for(int i =0; i<arr.size(); i++){
            System.out.print(arr.get(i)+" ");
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int row = sc.nextInt();
        int col = sc.nextInt();
        
        int matrix[][] = new int[row][col];
        for(int i = 0 ; i < row ; i++){
            for(int j = 0 ; j < col ; j++){
                matrix[i][j] = sc.nextInt();
            }
        }
        printElementInAllRows(matrix);
        sc.close();
    }
}
