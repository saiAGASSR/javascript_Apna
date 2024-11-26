// its third way to write event listeners 
// 1 st is inline 
//  onclick on function
// Multiple event listeners are not possible in second case like  i am writing another function on line line 30 in eventsDOM
// the function calling is happpening for the latest 


let btnsListCollectionsNotArray = document.querySelectorAll("button");


//  3rd 
for (btn of btnsListCollectionsNotArray) {
    // btn.onClick=consolePrinterFunction;    first time i wrote in camelcase    it did not work   so all in small
   
    // btn.onmouseenter = mouseHoverEvent;


    // btn.addEventListener("click",consolePrinterFunction);
    // btn.addEventListener("click",anotherEventCalling);
    // Y did you comment this ?  single click and double click cannot perform same 

    btn.addEventListener("dblclick", function (){
        alert("doubleclicked");
    });


    console.dir(btn);

}


// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


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