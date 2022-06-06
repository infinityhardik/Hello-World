// Labelled Jump Statements

package Stacks_Queues;

public class LabelledBreaks {
    public static void main(String[] args) {
        // continue, break, and return are keywords used for jump in the program.
        
        label: 
        // Creating a Jump Destination/Target with a Name/Label (variable) 
        // Labels Works with 'continue' and 'break' both
        
        for(int i = 0; i < 5; i++){
            for(int j = 0; j < 5; j++){
                for (int k = 0; k < 5; k++) {
                    System.out.println("Inside Inner Loop");
                    if(k==2){
                        break label;
                    }
                }
            }
        }
    }
    
}