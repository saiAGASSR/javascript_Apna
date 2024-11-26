let  maxRANGE = prompt("Please enter any maximum number ");
let random = Math.floor((Math.random() * maxRANGE ))  + 1;

let guess = prompt("Please guess the number  or enter quit to quit the game ");

while(true){
    if(guess == "quit"){
        console.log("Quitting game");
        break;
    }else if(guess == random){
        console.log(`Your guess ${random} is correct ..Hurraii congrats `); 
        break;

    }else if(guess < random){
        guess = prompt("Please try again  ..  Hint: Your Guess is too small... ");
    }else{
        guess = prompt("Please try again  ..  Hint: Your Guess is too big... ");

    }
}