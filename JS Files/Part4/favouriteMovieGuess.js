let favouriteMovie = "Avatar";

let userGuess= prompt("guess my favourite movie , if you want to quit please enter quit;" );
// while((userGuess != favouriteMovie) && (userGuess != "quit")){
//     userGuess =  prompt("No my favourite movie is not that movie please enter again");
//     console.log("user guessed",userGuess);

// }

for (userGuess;(userGuess != favouriteMovie) && (userGuess != "quit"); userGuess =  prompt("No my favourite movie is not that movie please enter again")) {
    console.log("user guessed",userGuess);
    
}

if(userGuess === "Avatar"){
    alert("your guess is correct ");

}else if(userGuess === "quit"){
    alert("You have quit the game ")
}
