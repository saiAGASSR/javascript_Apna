// Events are signals that something has occured 
// Uaser inputs  and actions 

// inline is not efficientr 
//  On every element    In DOM    for every object events mostly starts with On ;

let btnsListCollectionsNotArray = document.querySelectorAll("button");

for (btn of btnsListCollectionsNotArray) {
    // btn.onClick=consolePrinterFunction;    first time i wrote in camelcase    it did not work   so all in small
    btn.onclick = anotherEventCalling; 
    btn.onclick = consolePrinterFunction;

    // btn.onmouseenter = mouseHoverEvent;
    btn.onmouseenter = mouseHoverEvent;
    console.dir(btn);

}

function consolePrinterFunction(){
    alert("clicked");
    console.log("clicked");
};


function mouseHoverEvent(){

    console.log("mouse is entered");

}

function anotherEventCalling (){

    alert("sai!!!!");

}