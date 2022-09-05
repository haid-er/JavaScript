// Program to check whether a number is prime or not

let num = Number(prompt(`Enter any number : `));
let b=0;
let a=1;
while(a<=num){
    if(num%a==0)
    {
        b++;
    }
    a++;
}
if(b===2){
    console.log("Given Number is Prime Number . ");
}
else{
    console.log("Given Number is not a prime number . ")
}