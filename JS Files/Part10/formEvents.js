let  formAction = document.querySelector("form");

// formAction.addEventListener("click",formEventFunction);
formAction.addEventListener("submit",formEventFunction);

function formEventFunction(event){
    console.log("form is submitted ");             // -> you cannot see this because    but when default behaviour of event is invoked this can be used 
    // alert("form is submitted redirecting to the action page ");
    event.preventDefault();
    
}

// to prevent default action of event default action behaviour   --> event.preventDefault() is used