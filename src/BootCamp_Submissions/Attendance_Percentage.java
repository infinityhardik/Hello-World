/*
Question :  A student will not be allowed to sit in exam if his/her attendence is less than 75%.
Take following input from user : Number of classes held, Number of classes attended. 
And print percentage of class attended Is student is allowed to sit in exam or not.
*/
package BootCamp_Submissions;
import java.util.Scanner;

public class Attendance_Percentage{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Exam Verification based on Attendance" + "\n");
        System.out.println("Enter Number of Classes held by the Institution :");
        int n = in.nextInt();
        System.out.println("Enter Number of Classes attended by the Student :");
        int attended = in.nextInt();
        //Conversion of Int to Float Values for Percentage Calculation
        float attendance = (float)attended/(float)n*100f; 
        System.out.println("Attendance by the Student = "+attendance+"%");
        if(attendance>=75){
            System.out.println("Student is allowed to sit in Exams.");
        } else {
            System.out.println("Student is not allowed to sit in Exams !");
        }
        in.close();
    }
}
/* Solved by Hardik Bhaavani */