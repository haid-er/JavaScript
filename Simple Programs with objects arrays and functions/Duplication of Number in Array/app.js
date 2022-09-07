// Program to check Duplication of Numbers in Array

// Function to take a number from user
function num(){
    let num = Number(prompt("Enter a Number"));
    return num;
}

let array = [num() , num() ,num() , num(), num(), num(), num() ,num(), num(), num()];
console.log(array);
let duplication = 0;
for(let i = 0 ; i < array.length ; i++)
{
    for(let j = i+1 ; j < array.length ; j++)
    {
        if(array[i]===array[j])
        {
            console.log(array[i] , "is duplicated.")
        }
        
    }           
}
