// Program to reverse the string

let str = prompt("Enter any String");
let rev = "";
console.log(str);
for(let n=str.length-1 ; n>=0 ; n--)
{
    rev = rev + str[n];
}
if(rev === str){
    console.log("String is Palindrome");
}
else
{
    console.log("String is not Palindrome");
}

// other method
// let counter1 , counter2 ;
// for(let a = str.length -1 , b=0 ; a>= 0&& b<= str.length; a--,b++ )
// {
//    counter1 = str[a];
//    counter2 = str[b];
//    console.log(a , b)
//    if(counter1 !== counter2){
//     console.log("String is not Palindrome . ");
//     break;
//     }
// }
