// Greatest,Smallest and Sum of Number in Array

// Function to take a number from user
function num(){
    let num = Number(prompt("Enter any Number"));
    return num;
}

let array = [num() , num() ,num() , num(), num()]

console.log(array);
let max = array[0] , min = array[0] , sum = 0;
console.log(max);
console.log(min);
for(let i = 0 ; i < array.length ; i++)
{
    if(max<=array[i])
    {
        max = array[i];
    }
    if(min >= array[i])
    {
        min = array[i];
    }
    sum = sum + array[i];
}
console.log("Greatest number in Array = ", max);
console.log("Smallest Number in Array = ", min);
console.log("Sum Of numbers  = ", sum);