let i = 1;
while(i<=5){
    if ( i === 3 ){
        break;
    }
    console.log(i);
    i++;
}

console.log("we used break at 3");


let favouriteMovie = "Avatar";

let userGuess= prompt("guess my favourite movie , if you want to quit please enter quit;" );
while((userGuess != favouriteMovie)){
    if((userGuess === "quit")){
                alert("you have quit the game ");
                break;
            }
    userGuess =  prompt("No my favourite movie is not that movie please enter again");
    console.log("user guessed",userGuess);

}

// for (userGuess;(userGuess != favouriteMovie) ; userGuess =  prompt("No my favourite movie is not that movie please enter again")) {
//     if((userGuess === "quit")){
//         alert("you have quit the game ");
//         break;
//     }
//     console.log("user guessed",userGuess);
    
// }

if(userGuess === "Avatar"){
    alert("your guess is correct ");

}
