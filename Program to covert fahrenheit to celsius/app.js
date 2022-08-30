// Program to convert temperature from fahrenheit to celsius

let fahrenheit = Number(prompt("Enter Temperatur in fahrenheit"));

let celsius;
celsius =  (fahrenheit-32)*0.5556;
console.log(`${fahrenheit} Fahrenheit = ${celsius.toFixed(5)} Celsius`);
