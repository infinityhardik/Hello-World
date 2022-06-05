/* 
Write Java methods to calculate the area of a triangle. 
Input Side-1: 10                                                                               
Input Side-2: 15                                                                               
Input Side-3: 20    
Expected Output : The area of the triangle is 72.6184377413890 */

// The Area of Triangle is Calculated using Heron's Formula : The Input is the 3 sides of Triangle.
package BootCamp_Submissions;
import java.util.Scanner;

public class Triangle_Area
{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Triangle Area Calculator :");
        System.out.print("Input Side 1 : ");        
        double s1 = in.nextDouble();
        System.out.print("Input Side 2 : ");        
        double s2 = in.nextDouble();
        System.out.print("Input Side 3 : ");        
        double s3 = in.nextDouble();
        System.out.println("The area of the triangle is "+triangle_Area(s1, s2, s3));
        in.close();
    }
    
    public static double triangle_Area(double s1, double s2, double s3){
        // Using Heron's Formula for Calculation of Triangle Area using 3 Sides
        // Calculating Semi-Perimeter s 
        double s = (s1+s2+s3)/2d; 
        return Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
    }
}
/* Solved by Hardik Bhaavani */