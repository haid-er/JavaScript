// Program to calculate electricity bill
// Units <=500 --->cost Rs.3
// 500<units<=700 ---> cost Rs.7
// units>700 --->cost Rs.10

let units = Number(prompt("Enter Number of Units consumed"));
let bill = 0;

if(units>700){
    bill = units*10;
    console.log(`Your total electricity bill = Rs.${bill}`);
}
else if(units>500){
    bill = units*7;
    console.log(`Your total electricity bill = Rs.${bill}`);
}
else if(units<=500 && units>=0){
    bill = units*3;
    console.log(`Your total electricity bill = Rs.${bill}`);
}
else{
    console.log("Invalid Input of Units Consumed");
}
