//  FizzBuzz Problem using funtion
// Function takes a number as an input and returns a string
// If the input is divisible by 3 return fizz.
// If the input is divisible by 5 return buzz.
// If the input is divisible by 3 and 5 return fizzbuzz.
// If the input is not divisible by 3 or 5 return the same input
// If the input is not a number like someone passes string to a function  print not a number on console.


function fizzbuzz(number)
{

    if(number % 3 === 0 && number % 5 === 0)
    {
        return "FizzBuzz";
    }
    else if(number % 3 === 0)
    {
        return "Fizz";
    }
    else if(number % 5 === 0)
    {
        return "Buzz";
    }
    else 
    {
        return number;
    }
    
}


let num = Number(prompt("Enter any Number"));
let check = fizzbuzz(num);
console.log(check);
