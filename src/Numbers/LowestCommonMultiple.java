package Numbers;
import java.util.Scanner;

class LowestCommonMultiple {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		// Enter the two numbers in the input console
        int number1 = scan.nextInt();
		int number2 = scan.nextInt();
        System.out.print(lcmfunc(number1, number2));
        scan.close();
	}
	
	// Write the LCM function here
	public static int lcmfunc(int num1, int num2)
	{
	    int val1;
        int val2;
        val1=num1>num2?num1:num2;//greater value
        val2=num1<num2?num1:num2;//lower value
        int lcm =val1;
        for(int index=1;index<=val1; index++)
        {
            val1=num1*index;
            for (int i=1;i<=val1; i++)
            {
                val2=num2*i;
                if(val1==val2)
                {
                    lcm=val1;
                    break;
                }
            }
            if (lcm==val1&&lcm==val2)
            {
                break;
            }
        }
        return lcm;
	}
    
}