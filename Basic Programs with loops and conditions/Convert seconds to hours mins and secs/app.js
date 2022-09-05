// Program to convert seconds to equivalent hours, minutes and seconds

let totalSeconds = temp = Number(prompt("Enter Number of Seconds"));
let hour,min,sec;
hour = temp / 3600 ;
temp = temp %3600 ;
min = temp / 60 ;
temp = temp % 60;
sec = temp;
console.log(`${totalSeconds} Seconds = ${hour.toFixed(1)} Hours, ${min} Minutes and ${sec} Seconds`);

