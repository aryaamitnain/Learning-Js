// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2022, 13, 23);

// let myCreatedDate = new Date(2022, 3, 4, 5, 3);
// let myCreatedDate = new Date("2023-01-13");
let myCreatedDate = new Date("01-04-2024");

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay()+1);

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

newDate.toLocaleString('default',{
    weekday:'long',
    timeZone:''
})