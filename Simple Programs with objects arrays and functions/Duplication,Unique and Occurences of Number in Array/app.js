// Program to check Duplication of Numbers in Array

// Function to take a number from user
function num(){
    let num = Number(prompt("Enter any Number"));
    return num;
}

let array = [num() , num() ,num() , num(), num(), num(), num() ,num(), num(), num()]
console.log(array);
let duplication, unique = "No Unique Number in Array" ;
console.log("Duplicate Numbers :");
for(let i = 0 ; i < array.length ; i++)
{
    duplication = 0;
    for(let j = 0 ; j < array.length ; j++)
    {
        if(array[i]===array[j])
            duplication++;
    }
    if(duplication>1)
        console.log(array[i]);           
}
