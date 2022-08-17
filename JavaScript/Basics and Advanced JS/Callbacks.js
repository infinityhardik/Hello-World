// Passing Functions as Argument
// Note that the arrow function bar() as an argument to the arrow function foo().

const foo = (anotherFunction) => {
    console.log("Inside foo");
    anotherFunction();
}

const bar = () => {
    console.log("Inside bar");
}

foo(bar);

/* 
Callback = formed from two words > Call + Back. 
In simpler terms, it is like Answering Back a Missed Call.
We have a missed call because we were busy doing something else.
After we have completed our execution, we become free and then we can answer the missed call.
*/

/* 
A callback is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of action. 
*/

/* 
Callbacks serve a great purpose in asynchronous programming in the following two cases:

1. Mark completion of a long-running task:
Suppose you have a long-running task and you cannot decide how much time it will take to finish 
its execution. In such a case, you can use a callback which will be invoked when the 
long-running task has finished its execution, thus notifying its completion.


2. Execute a task after a long-running task:
Suppose you have a long-running task and you cannot decide how much time it 
will take to finish its execution but you know that you need to perform some other task whenever 
the long-running function finishes its execution. In such a case, 
you can use a callback which contains the other task to be carried out after the execution 
of a long-running task. Also, this callback will be invoked after the long-running task has finished.
*/