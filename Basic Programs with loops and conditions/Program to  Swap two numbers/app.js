// Program to swap two numbers using + and -

let num1 = 43;
let num2 = 14;

console.log("Before Swaping",num1,num2);

num1 = num1+num2;
num2 = num1-num2;
num1 = num1-num2;


console.log("After Swaping",num1,num2)

// Program to swap two numbers using * and /

let num3 = 10;
let num4 = 20;

console.log("Before Swaping",num3,num4);

num3 = num3*num4;
num4 = num3/num4;
num3 = num3/num4;


console.log("After Swaping",num3,num4);

// Program to swap two numbers using temp variable

let num5 = 45;
let num6 = 56,temp;

console.log("Before Swaping",num5,num6);

temp = num5 ;
num5 = num6 ;
num6 = temp ;

console.log("After Swaping",num5,num6);
