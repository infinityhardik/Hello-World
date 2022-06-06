package Stacks_Queues;

import java.util.EmptyStackException;

public class MyStackUsingArray_Upgrad<T>{
    private T[] arr;
    int capacity;
    int index;
    
    @SuppressWarnings("unchecked")
    public MyStackUsingArray_Upgrad(int capacity){
        this.capacity = capacity;
        this.arr = (T[]) new Object[capacity];
        index = -1;
    }

    public boolean isEmpty(){ return index == -1; }

    public boolean isFull(){ return index == this.capacity-1;}

    public void push(T data){
        if(isFull()){
            throw new StackOverflowError("Stack is already full !");
        } 
        this.arr[++index] = data;
    }

    public T pop(){
        if(isEmpty()){
            throw new EmptyStackException();
        }
        return this.arr[index--];
    }

    public static void main(String[] args) {
        MyStackUsingArray_Upgrad<String> s = new MyStackUsingArray_Upgrad<>(5);
        System.out.println("Is Empty :"+s.isEmpty());
        s.push("Hardik");
        s.push("Hardik");
        System.out.println("Is Empty :"+s.isEmpty());
        System.out.println(s.pop());
        System.out.println(s.pop());
        System.out.println("Is Empty :"+s.isEmpty());
    }
}
