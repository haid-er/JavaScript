// Program to convert hours minutes and seconds to equivalent number of seconds

let hours = Number(prompt("Enter hours"));
let minutes = Number(prompt("Enter Minutes"));
let seconds = Number(prompt("Enter seconds"));
let totalSeconds = (hours*60*60) + (minutes*60) + seconds;
console.log(`${hours} Hours, ${minutes} Minutes and ${seconds} Seconds = ${totalSeconds} Seconds `);
