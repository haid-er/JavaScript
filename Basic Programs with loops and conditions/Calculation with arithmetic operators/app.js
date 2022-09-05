// Program which take two operands and an operator and then calculate the result

let operator = prompt("Enter any of these + , - , * , /");
let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));
let result = 0;
if(operator === "+"){
    result = num1+num2 ;
}
else if(operator === "-"){
    result = num1-num2 ;
}
else if(operator === "*"){
    result = num1*num2 ;
}
else if(operator === "/"){
    result = num1/num2 ;
}
else{
    console.log("Invalid Input.");
    result = String(result);
    result = "Invalid"
}
console.log(`Result = ${result}`);
