// Any kind of Internal Java Language tweaks for implementations in Programming.

package BootCamp_Submissions;

import java.util.Arrays;

public class Miscellaneous {
    public static void main(String[] args) {
        int x = 1;
        int y = 2;
        
        if( (x!=1) && (y++==2) ){
            System.out.println("y++ not running");
            // y++ does not update value because the First Condition is false in itself 
            // and hence the second condition is not checked because AND "&&" operator is used.
        }
        System.out.println(x +" "+ y);
        
        if( (x!=1) || (y++==2) ){
            System.out.println("y++ is running after checking the condition without updating");
            // y++ updates value because the First Condition is false in itself 
            // and hence the second condition is checked because OR "||" operator is used.
            // y++ is post operation increment update to the variable. 
        }
        System.out.println(x +" "+ y);

        /* Next Miscellaneous : */

        int top = 0;
        int arr[] = {10, 20, 30, 40, 50};
        System.out.println(Arrays.toString(arr));
        
        System.out.println(arr[top++] = 1);
        // Here top = 0 because ++ increment is done post operation
        // ∴ top value updates to 1 after modifying arr[0], i.e. arr[atPreviousTop];
        
        System.out.println(arr[top] = 2);
        // Here top = 1 as done by the previous operation. 
        
        System.out.println(arr[++top] = 3);
        // Here top = 2 because ++ increment is done pre operation 
        // ∴ top value updates to 2 before modifying arr[atNewTop];

        System.out.println(Arrays.toString(arr));

    }
}
