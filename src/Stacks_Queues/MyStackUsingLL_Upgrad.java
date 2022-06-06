/* 
Stack Implementation using Java Linked List Library from Upgrad Platform 
*/
package Stacks_Queues;

import java.util.EmptyStackException;
import java.util.LinkedList;

public class MyStackUsingLL_Upgrad<T> {

    public static void main(String[] arg) {
        MyStackUsingLL_Upgrad<String> stack = new MyStackUsingLL_Upgrad<String>();

        stack.push("OOP");
        stack.push("Algorithms");
        stack.push("Data Structures");

        try {
            while (true) {
                System.out.println("Popped " + stack.pop());
            }
        } catch (EmptyStackException e) {
            System.out.println("Done!");
        }
    }

    private LinkedList<T> list = new LinkedList<T>();

    public void push(T e) {
        this.list.add(e);
    }

    public T pop() {
        if (this.list.size() > 0) {
            T e = list.get(list.size() - 1);
            list.remove(list.size() - 1);
            return e;
        }
        throw new EmptyStackException();
    }

    public Boolean isEmpty() {
        return this.list.size() == 0;
    }
}