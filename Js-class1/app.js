// Simple Printing om screen

console.log("Hello World");
console.log("JavaScript");

// Variables

// Three keyword to declare variables in javascript
// var
// let
// const

var myName = "Malik Haider Ali";
console.log(myName);

// 2types of values
// primitive --> which can be accessed directly
// Reference values --> object array and functions

// primitives data types --> Number , string , boolean , null , undefined
// Number is used to store any number
// string is sequence of character
// bollean results in true or false    
// null are such values which we know that it will exist in future bu we dont know the exact value at that time
// for example student can add number in uni website then the value of phone number will be null unless the student add his phone number
// undefined is empty value


var myAge = 22;
var myName = "Malik Haider Ali";
var isAdmin = false;
var myNumber = null;
var abc;


console.log(myAge,myName,isAdmin,myNumber,abc);

// difference var let and const

// var and let are same var was used in es-5 and let is used in es-6
// const stands for const and it must be initailized and can't be overwrited

// operators
//      ( = )assignment operator
//      ( + , - , * , / , % )arithmetic opertors
//      comparison operator (< , > , <= , >= , != , ==, ===)
//      logical operator (and operator && , or || , not !)
//      typeof var is used to check type of variable
//      ternary operator (?)
//      ternary syntax

    myName == "Malik Haider Ali" ? (console.log("Hello malik")) : (console.log("hello abc")) ;

let number1 = 20;
let number2 = 30;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);
console.log(number1 < number2);
console.log(true&&true);
console.log(false||false);
console.log(!false);


// string concatination 

let firstName = "Malik";
let lastName = "Ali";
console.log(firstName+" "+lastName);

// Truthy and Falsy
// falsy values are such values whose result always false
// 0 , false , "" , null , undefined   are falsy values 
let number=0;
number?(console.log("True")):(console.log("false"));
// all the values other than falsy values are truthy values


let num1 = -10;
(num1>0) ? (console.log("Positive")):(console.log("Negative"));




