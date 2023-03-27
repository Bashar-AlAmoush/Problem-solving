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
        if (length==0)
        return str[0];

        return str[length]+reverseString(str,length-1);
    }

    let str ="bashar";
    let leng =str.length;
    console.log(reverseString(str,length));
