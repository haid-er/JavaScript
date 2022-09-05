// Program to calculate length of string without using length of varibales

let str = prompt("Enter any String");
let count = 0;
console.log(str);
for(let i=0 ; i !== "" ; i++){
    if(str[i]!== undefined)
        count++;
    else
        break;
}
console.log(count);