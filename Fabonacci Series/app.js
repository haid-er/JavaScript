// fabonacci series

let n1 = 0,n2 = 1,n3;
let num = Number(prompt("Enter number upto which you want to display fabonacci series"));
for(let n=0; n<=num ; n++)
{
    console.log(`${n3} , `);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}