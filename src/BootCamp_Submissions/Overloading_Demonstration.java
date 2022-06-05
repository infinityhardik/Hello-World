/* 
Method Overloading >> 
1. Different Number of Parameters  
2. Different Data Type of Parameters 
*/
package BootCamp_Submissions;

public class Overloading_Demonstration {
    static float div(int a, int b){
        System.out.print("Floor Division of "+a+" & "+b+" : ");
        return a/b;
    }
    
    static float div(float a, float b){
        System.out.print("Normal Division of "+a+" & "+b+" : ");
        return a/b;
    } 
    
    public static void main(String args[]) {
        System.out.println(div(5,2));
        System.out.println(div(5.0f,2.0f));
    }
}