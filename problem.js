    //q1
    // Fibonacci Series:
    // Write a program to print Fibonacci for a given number.
    // The Fibonacci series is a series of numbers in which each is the sum of the two preceding ones, usually starting with 0 and 1. 

    function Fibonacci(n) {
        if (n <= 1)
            return n;
        return Fibonacci(n-1) + Fibonacci(n-2);
    }
    console.log (Fibonacci(14));

    //end q1

    //q2 
    //The sum of Array Elements:Write a program that Calculates the sum of elements in an array 

    function sumArray(arr,length) {
    if (length==0)
    return arr[0];
        return arr[length-1]+sumArray(arr,length-1);
    }
    let arr=[1,2,3,4,5]
    let length=arr.length;
    console.log(sumArray(arr,length));


    //q3 
    //Reverse a String: Write a program that Reverses a string 

    function reverseString(str,length) {
        if (length<0)
        return "";
        return str[length]+reverseString(str,length-1);
    }
    let str ="basharr";
    let leng =str.length-1;
    console.log(reverseString(str,leng));
//////////////////


//Data Structure

// q1 Implement a function that returns the minimum element in a stack in constant time complexity.
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }
  pop() {
    const val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return val;
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
let st=new MinStack ();
st.push(1);
st.push(2);
st.push(0);
st.push(4);
st.push(6);
st.push(5);
console.log(st.getMin());

//////
//Given a queue of integers, reverse the order of the elements in the queue.

//q2-1
function reverseQueue(queue) {
    const stack = [];
    while (queue.length > 0) {
      stack.push(queue.shift());
    }
    while (stack.length > 0) {
      queue.push(stack.pop());
    }
    return queue; 
  }
  const queue = [1, 2, 3, 4, 5];
const reversedQueue = reverseQueue(queue);
console.log(reversedQueue);
////
// q2 -2
// class Queue {
//     constructor() {
//       this.items = [];
//     }
//     push(element) {
//       return this.items.push(element);
//     }
//     pop() {
//       if (this.items.length > 0) {
//         return this.items.shift();
//       }
//     }
//     front() {
//       return this.items[0];
//     }
//     size() {
//       return this.items.length;
//     }
//   }
//   function reverseFirstK(queue, k) {
//     solve(queue, k);
//     let s = queue.size() - k;
//     while (s-- > 0) {
//       let x = queue.front();
//       queue.pop();
//       queue.push(x);
//     }
//     return queue;
//   }
   
//   function solve(queue, k) {
//     if (k == 0) return;
//     let e = queue.front();
//     queue.pop();
//     solve(queue, k - 1);
//     queue.push(e);
//   }
//   let queu = new Queue();
//   queu.push(10);
//   queu.push(20);
//   queu.push(30);
//   queu.push(40);
//   queu.push(50);
//   queu.push(60);
//   queu.push(70);
//   queu.push(80);
//   queu.push(90);
//   queu.push(100);
//   let k = queu.size();
//   q = reverseFirstK(queu, k);
//     console.log(q);
/////////////////////////////////////////////////////////////////

// q3
//Implement a Queue using 2 stacks s1 and s2.

class Queue {
    constructor() {
      this.s1 = [];
      this.s2 = []; 
    }
    enqueue(val) {
      this.s1.push(val);
    }
    dequeue() {
      if (this.s1.length === 0 && this.s2.length === 0) {
        return undefined;
      }

      if (this.s2.length === 0) {
        while (this.s1.length > 0) {
          this.s2.push(this.s1.pop());
        }
      }
  
      return this.s2.pop();
    }
  
    isEmpty() {
      return this.s1.length === 0 && this.s2.length === 0;
    }
  }

  const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

console.log(q.dequeue()); 
console.log(q.dequeue()); 
console.log(q.dequeue()); 
console.log(q.dequeue()); 
 