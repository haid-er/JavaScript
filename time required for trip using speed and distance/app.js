// Program to find time required for trip using speed and Distance

let speed = Number(prompt("Enter the Speed(in kilometers per hour) at which you Travel"));
let distance = Number(prompt("Enter the Distance in Kilometers which you cover"));
let time;
time = distance / speed ;
console.log(`${time.toFixed(5)} hours is time required to cover ${distance} kilometers distance with speed of ${speed} kilometer per hour.`);
