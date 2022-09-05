// Program to reverse the string

let str = prompt("Enter any String");
let rev = "";
console.log(str);
for(let n=str.length-1 ; n>=0 ; n--)
{
    rev = rev + str[n];
}
console.log(rev);

