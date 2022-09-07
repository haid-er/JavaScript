// Funtion to reverse the string

function reverse(str){
    
    let rev = "";
    console.log(str);
    for(let n=str.length-1 ; n>=0 ; n--)
    {
        rev = rev + str[n];
    }
    if(rev === str){
        return "String is Palindrome";
    }
    else
    {
        return "String is not Palindrome";
    }
}


let str = prompt("Enter any String");
console.log(reverse(str));


