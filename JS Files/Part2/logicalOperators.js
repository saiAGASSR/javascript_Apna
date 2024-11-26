// Logical Operators    &&          ||          !
//  Used to combine expressions

//  && Logical and (exp1) && (exp2)

let Marks = 0;

if (Marks >= 30  &&  Marks  >= 80) {

    console.log("pass");
    console.log("First Ranker");

    
} else {

    console.log("Failed");
    
}

if (Marks >= 30  ||  Marks  >= 80) {

    console.log("pass  OR");
    console.log("First Ranker  OR");

    
} else {

    console.log("Failed OR");
    
}

if ( !(Marks >= 30)) {

    console.log("pass  NOT");
    console.log("First Ranker  NOT");

    
} else {

    console.log("Failed NOT");
    
}


// All combine

if ((Marks>=30 && Marks <=80) || !false) {
    console.log("ALL combined");
    
}

// Practice Questions 

let string = "absasdsad";

if(string[0] === "a" && string.length > 3 ){
    console.log("Good String")
} else{
    console.log("Bad String")

}