let number = 25 ;

if(number % 10  === 0  ){
    console.log("Good");

} else {
    console.log("bad");
}


let userName = prompt("Enter your name");
let userAge = prompt("Enter your age");

let userDetails = ` ${userName} is ${userAge} years old  `;

alert(userDetails);


let quarter = 4 ;

switch(quarter){
    case 1 :
        console.log("Q1 months January February March ");
        break;
    case 2 :
        console.log("Q2 months April May June ");
        break;
    case 3 :
        console.log("Q3 months July August September");
        break;
    case 4 :
        console.log("Q4 months October November December");
        break;
    default :
        console.log("Not a quarter")
}


let goldenString = "asssden";

if( (goldenString[0] === "A"  || goldenString[0] === "a" ) && (goldenString.length > 5) )
    {
        console.log("string is  golden ");
    } 
else{
        console.log("not golden")
}

let num1 = Number(prompt("Please enter number 1 "));
let num2 = Number(prompt("Please enter number 2 "));
let num3 = Number(prompt("Please enter number 3 "));

if(num1 > num2)
    {
    if(num1 > num3 )
        {
            alert(`The numbers you have entered from ${num1} and ${num2} and ${num3} ::::: ${num1}  is the largest`)
        }
    else
        {

            alert(`The numbers you have entered from ${num1} and ${num2} and ${num3} ::::: ${num3}  is the largest`)

        }
}
else 
    if(num2 > num3 )
        {

            alert(`The numbers you have entered from ${num1} and ${num2} and ${num3} ::::: ${num2}  is the largest`)

        }
        else {

            alert(`The numbers you have entered from ${num1} and ${num2} and ${num3} ::::: ${num3}  is the largest`)

            }

    
let lastDigit1 = 2132123333212123;
let lastDigit2 = 21213232322;

if ( lastDigit1[lastDigit1.length - 1] === lastDigit2[lastDigit2.length - 1] )
    {
            console.log("Last digit is same ")
    }
else{
            console.log("Last digit is  not same ")

}

if ( (lastDigit1 % 10) === (lastDigit2 % 10) )
    {
            console.log("Last digit is same ", lastDigit1%10)
    }
else{
            console.log("Last digit is  not same ")

}

