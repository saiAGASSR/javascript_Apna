let inputField = document.querySelector("input");

// inputField.addEventListener("click",mouseFunction);
// inputField.addEventListener("mouseenter",mouseFunction);
// inputField.addEventListener("keydown",mouseFunction);
inputField.addEventListener("keyup",mouseFunction);

// in any callback function in addEventListeners  a default argument is passed into the function


function mouseFunction(event){
    // console.log(event);
    // console.dir(event);
    console.log(` event.code  = ${event.code}  and event.key  = '${event.key}' was pressed  `);
    
    // console.log(` ${this}  element was clicked and  ${event} was triggered  `);

    if(event.code == "ArrowUp"  || event.code == "KeyU"){

        console.log("character is moving upward ");
        
    } else if(event.code == "ArrowDown" || event.code == "KeyD"){

        console.log("character is moving downward ");

    } else if (event.code == "ArrowRight" || event.code == "KeyR"){

        console.log("character is moving right ");


    } else if (event.code == "ArrowLeft" || event.code == "KeyL"){

        console.log("character is moving left ");


    }
    
    

}



