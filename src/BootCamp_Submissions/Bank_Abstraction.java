/* 
Abstraction = Data Hiding + Pattern Implementation in Software Development as per instructions of Senior Executive.
Pattern Implementation >> because abstract Methods need to be completely implemented in each of the Subclasses.
*/
/* 
Create an abstract class 'Bank' with an abstract method 'getBalance'. 
$100, $150 and $200 are deposited in banks A, B and C respectively. 
'BankA', 'BankB' and 'BankC' are subclasses of class 'Bank', each having a method named 'getBalance'. 
Call this method by creating an object of each of the three classes.
 */
package BootCamp_Submissions;
abstract class Bank{
    double balance;
    public Bank(double balance){
        this.balance = balance;
    }
    abstract double getBalance();
}

class BankA extends Bank{
    public BankA(double balance){
        super(balance);
    }
    double getBalance(){
        return this.balance;
    }
}

class BankB extends Bank{
    public BankB(double balance){
        super(balance);
    }
    double getBalance(){
        return this.balance;
    }
}

class BankC extends Bank{
    public BankC(double balance){
        super(balance);
    }
    double getBalance(){
        return this.balance;
    }
}

public class Bank_Abstraction{
    public static void main(String[] args) {
        BankA a = new BankA(100);
        BankB b = new BankB(150);
        BankC c = new BankC(200);

        System.out.println(a.getBalance());
        System.out.println(b.getBalance());
        System.out.println(c.getBalance());
    }
}