// If Statement in JS 
console.log("Before if statement");
let ageee = 19;
if(ageee>=18){
    console.log("you can Vote");
    console.log("You can Drive");
}
console.log("After if statement");


console.log("Before if statement");
let agee = 1;
if(agee>=18){
    console.log("you can Vote");
    console.log("You can Drive");
}
console.log("After if statement");

let myName = "Sai Teja";

if(myName == "Sai Teja"){
    console.log(` Welcome ${myName}`);
}


// Strings Case Sensitive 
//  Practice Questions; 

let trafficSignal = "blue" ;

if(trafficSignal == "red"){
    console.log("Please stop your Vehicle");
}

if(trafficSignal == "yellow"){
    console.log("Please be ready to go ");

}

if (trafficSignal == "green") {
    console.log("Please go "); 
}


// if statement until now 


if(trafficSignal === "red"){
    console.log("Please stop your Vehicle , Red in ifelse");

}

else if(trafficSignal === "yellow"){
    console.log("Please be ready to go  ,  Yellow in ifelse");
}
else if(trafficSignal === "green"){
    console.log("Please go , Green in ifelse "); 

}

let Age = 14;

if(Age>= 18){
    console.log("You can vote");
} 
else {
    console.log("You cannot vote ");
}



if(Age >= 18){
    console.log("You can vote");
} 
else if(Age <= 18) {
    console.log("You cannot vote ");
}

if(Age >= 18){
    console.log("You can vote 1 st if equals");
} 
else if(Age >= 18) {
    console.log("You cannot vote  2nd   ");
}

if(Age >= 18){
    console.log("You can vote    equals Without else");
} 
if(Age >= 18) {
    console.log("You cannot vote  nd  Without else  ");
}

let marks = 299 ;

if (marks >=  90)
    {
        console.log("Grade  A +");
    } 

else if (marks >= 80  )
    {
        console.log("Grade  A ");   
    } 

else if(marks >=60)
    {
        console.log("Grade  B ");

    } 

else if(marks>= 40)
    {
        console.log("Grade  C "); 

    }

else if(marks < 40)
    {
        console.log("Grade  F "); 

    }



let month = "September";

if ( month === "January" )
    {
        console.log("Winter is here");
    }
else if ( month === "May" )
    {
        console.log("Summer is here");
    }
else if ( month === "September" )
    {
        console.log("Rainy season is here");
    }


// Else Statement 

if(Age >= 18){
    console.log("You can vote");
} 
else  {
    console.log("You cannot vote , in  Only Else ");
}


if(trafficSignal === "red")
    {

        console.log("Please stop your Vehicle , Red in ifelse");

    }

else if(trafficSignal === "yellow")

    {
        console.log("Please be ready to go  ,  Yellow in ifelse");
    }

else if(trafficSignal === "green")
    {

        console.log("Please go , Green in ifelse "); 

    }
else
    {

        console.log("Signal is broken"); 

    }



// PopCorn Size

let popCornSize = "L";

if ( popCornSize === "S")
    {
        console.log("Price is 50")
    } 

else if (popCornSize === "M") 
    {
        console.log("Price is 100")

    }
else if (popCornSize === "L") 
    {
        console.log("Price is 150")
    
    }
else if (popCornSize === "L") 
    {
        console.log("Price is 200")
    
    }


    // Nested if 

if (marks >= 33){
    console.log("Pass")
    if(marks>=90){
        console.log("1st ranker")
    }

    else {
        console.log("2st ranker")

    }
}

else {
    console.log("Better Luck Next Time")
}