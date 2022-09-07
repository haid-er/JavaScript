// Function to calculate length of string without using builtin length funtion


function lengthOfString(input){
    let count = 0;
    console.log(input);
    for(let i=0 ; i !== "" ; i++){
        if(input[i]!== undefined)
            count++;
        else
            break;
    }
    return count;
}
let str = prompt("Enter any String");
let count = lengthOfString(str);
console.log("Length of String = " , count);