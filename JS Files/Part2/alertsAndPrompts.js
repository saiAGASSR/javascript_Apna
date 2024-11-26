// there are two ways to get input from user in JS 
// Alerts and Prompts
// Alert displays and alert message on the page 


// Propts  displays a dialog box  that ask user for some input 
alert("Something is wrong!");

console.log("this is a  simple log");
console.error("this is a  simple error ");
console.warn("this is a  simple warning");

prompt("enter your name ");

let storingName =  prompt("enter your name ") ;
console.log(` the entered name is ${storingName}` , typeof storingName);

let firstName = prompt("Please enter your First name :");
let lastName  = prompt("Please enter your last name:");

let fullName = firstName + lastName ; 

console.log("Full Name is " , fullName);

let msg = `Welcome ${fullName}`;
alert(msg)
