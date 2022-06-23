/* 
Given a list of tickets in pairs as source city and destination city, 
find the itinerary in order using the given list.

Note that the given list of tickets is non-cyclic and there is one ticket from each city except the destination city.
Sample Test Cases:

Input:
4
Bangalore Ranchi
Jamshedpur Kolkata
Ranchi Jamshedpur
Kolkata Varanasi

Output:
Bangalore->Ranchi
Ranchi->Jamshedpur
Jamshedpur->Kolkata
Kolkata->Varanasi 

Input:
4
Chennai Bangalore
Bombay Delhi
Goa Chennai
Delhi Goa

Output:
Bombay->Delhi
Delhi->Goa
Goa->Chennai
Chennai->Bangalore
*/
package DSA_Assignment;
import java.util.*;

public class OrderedItinerary {
    public static void findItinerary(Map<String, String> tickets) {
        if(tickets.isEmpty()){
            System.out.println("Invalid Input");
            return;
        }

        System.out.println();
        System.out.println("Ordered Itinerary :");
        
        String key = "";
        String value = "";
        
        for (Map.Entry<String, String> m : tickets.entrySet()) {
            if(!tickets.containsValue(m.getKey())){
                key = (String)m.getKey();
                value = (String) m.getValue();
                System.out.println(key+"->"+value);
                break;
            }
        }
        
        for(int i=1; i<=tickets.size();i++){
            if(tickets.containsKey(value)){
                key = value;
                //System.out.println(key);
                value = tickets.get(key);
                System.out.println(key+"->"+value);
            }
        }
        
        //System.out.println(tickets);
    }
    public static void main(String[] args) {
        Map<String, String> tickets = new HashMap<String, String>();
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i = 0 ; i < n ; i++){
            tickets.put(sc.next(),sc.next());
        }
        findItinerary(tickets);
        sc.close();
    }
}
