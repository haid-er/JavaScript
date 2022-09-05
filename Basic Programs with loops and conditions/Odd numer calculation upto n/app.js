// Program to Calculate all odd numbers upto n

let num = Number(prompt("Enter the the Number to which you want to calculate odd Numbers : "));
let sum = 0;

for(let i=1 ; i<=num ; i=i+2)
{
    sum = sum+i;
}

console.log(`The sum of odd numbers upto ${num} is : ${sum}`);
