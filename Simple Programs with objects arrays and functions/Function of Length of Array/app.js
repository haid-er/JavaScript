// Function to check the length of Array without using Built in Function

function lengthArray(array)
{
    let check = 1;
    let i = 0;
    while(check !== undefined)
    {
        check = array[i];
        i++;
    }
    i--;
    return i;
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log("Length of Array = " , lengthArray(array));