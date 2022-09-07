// Function to reverse the string

function strReverse(input){
    let rev = "";
    console.log(input);
    for(let n=input.length-1 ; n>=0 ; n--)
    {
        rev = rev + input[n];
    }
    return rev;    
}
let str = prompt("Enter any String");
// let reverse = strReverse(str);
// console.log(reverse)
console.log(strReverse(str));