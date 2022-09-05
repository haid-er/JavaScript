// Program to find factorial of given number

let num = Number(prompt("Enter any Number "));
let factorial = 1;
for(let n = 1 ; n<=num ; n++)
{
    factorial = factorial*n;
}
console.log(`The Factorial of the Given Number is : ${factorial}`);
