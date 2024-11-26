// TA anser

// let inputField = document.createElement("input");
// let addButton = document.querySelector("#addButton");
// let removeButton = document.querySelector("#removeButton");
// let listButton = document.querySelector("#listButton");
// let outerDiv = document.getElementById("outer");
// let tasksList = document.createElement("ul");
// let tasksArray = [];

// addButton.addEventListener("click", addFunction);
// removeButton.addEventListener("click", removeFunction);
// listButton.addEventListener("click", listFunction);
// inputField.addEventListener("change", addTaskToArray);

// function addFunction(event) {
//     if (!outerDiv.contains(inputField)) {
//         outerDiv.appendChild(inputField);
//     }
//     inputField.placeholder = "Please Enter the Task to add";
//     inputField.value = ""; // Clear the input field for new input
// }

// function addTaskToArray(event) {
//     let userEnteredTask = inputField.value.trim();
//     if (userEnteredTask !== "") {
//         tasksArray.push(userEnteredTask);
//         console.log(userEnteredTask);
//         inputField.value = ""; // Clear the input field after adding the task
//     }
// }

// function removeFunction(event) {
//     if (!outerDiv.contains(inputField)) {
//         outerDiv.appendChild(inputField);
//     }
//     inputField.placeholder = "Please Enter the Task to remove";
//     inputField.value = ""; // Clear the input field for new input
//     inputField.removeEventListener("change", addTaskToArray);
//     inputField.addEventListener("change", removeTaskFromArray);
// }

// function removeTaskFromArray(event) {
//     let taskToRemove = inputField.value.trim();
//     let index = tasksArray.indexOf(taskToRemove);
//     if (index > -1) {
//         tasksArray.splice(index, 1);
//         console.log(`Removed: ${taskToRemove}`);
//     }
//     inputField.value = ""; // Clear the input field after removing the task
//     inputField.removeEventListener("change", removeTaskFromArray);
//     inputField.addEventListener("change", addTaskToArray);
// }

// function listFunction(event) {
//     tasksList.innerHTML = ""; // Clear the current list
//     for (let task of tasksArray) {
//         let listItem = document.createElement("li");
//         listItem.textContent = task;
//         tasksList.appendChild(listItem);
//     }
//     if (!outerDiv.contains(tasksList)) {
//         outerDiv.appendChild(tasksList);
//     }
//     console.log(tasksArray);
// }



// VideoAnswer

let input = document.querySelector("input");
let addButton = document.querySelector("button");
let body = document.querySelector("body");
let ul = document.createElement("ul");


let tasksArray = [];

body.appendChild(ul);

input.addEventListener("change",addItemsFunction);
// addButton.addEventListener("click",showEventList);

function addItemsFunction (){
    console.log(`event has triggered  the user entered task is ${input.value}`);
    let userAddedTask = input.value;

    let listItem = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.innerText ="delete";
    deleteButton.classList.add("delete");



    listItem.innerText = userAddedTask;

    
    tasksArray.push(userAddedTask);
    console.log(tasksArray);
    ul.appendChild(listItem);
    listItem.appendChild(deleteButton);

    
    input.value = "";


  
let deleteButtons = document.querySelectorAll(".delete")
console.log("deletelist",deleteButtons);


// for ( button of deleteButtons){

//     button.addEventListener("click", function(event) {



//         let parentElement = this.parentElement;
//         console.log("parentElement of this is",parentElement);
        
//         parentElement.remove();
//     } ) 
// }


// Event Dlegation

ul.addEventListener("click",function(event){
    console.log(event.target.nodeName);

    if(event.target.nodeName == "BUTTON"){
        let parent = event.target.parentElement;
        parent.remove();
        
    };  
    
})

};

//  Actually in the above code if i keep the removove list functionality in the eventlistener it is working 
// when shradha sid thta event delegation we should worki on parent element


// function showEventList (){
//     for (let eachTask of tasksArray) {

//         console.log(eachTask);
//         listItem.innerText = eachTask
        
       
//     }
// }

console.log(tasksArray);




