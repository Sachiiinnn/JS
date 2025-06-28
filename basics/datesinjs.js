//  Dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth()); // 0-11
// console.log(myDate.toJSON()); // 1-31

// let myCreatedDate = new Date(2025, 9,20);
let myCreatedDate = new Date("01-10-2025");
// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime()); // Timestamp in milliseconds
// console.log(myCreatedDate.getTime() - myTimestamp); // Difference in milliseconds

// console.log(Date.now()/1000); // Current timestamp in seconds
// console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds, rounded down

let newDate =new Date();
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1); // Months are 0-indexed,   // so we add 1
// console.log(newDate.getDate()); // Day of the month
// console.log(newDate.getHours());    // Hours (0-23)                             
// console.log(newDate.getMinutes());  // Minutes (0-59)

newDate.setFullYear(2024); // Set year to 2024

console.log(newDate.toLocaleString('default',{
    weekday: 'long', // 'short' for abbreviated, 'narrow' for single letter
    year: 'numeric',
    month: 'long', // 'short' for abbreviated, 'narrow' for single letter
    day: 'numeric',
    hour: '2-digit', // 'numeric' for no leading zero
    minute: '2-digit', // 'numeric' for no leading zero
    second: '2-digit', // 'numeric' for no leading zero
    timeZoneName: 'short' // 'long' for full name, 'short' for abbreviation
}))
