let inputField = document.createElement("input");
let addButton = document.querySelector("#addButton");
let removeButton = document.querySelector("#removeButton");
let listButton = document.querySelector("#listButton");
let div = document.getElementById("outer");
let ul = document.createElement("ul");
let tasksArray = [];
div.appendChild(ul);





addButton.addEventListener("click",addFunction);
removeButton.addEventListener("click",removeFunction);
listButton.addEventListener("click",listFunction);
inputField.addEventListener("change",addTaskToArray)

function addFunction (event){
    console.log("add button is triggered");
    

    div.appendChild(inputField);
    inputField.placeholder = "Please Enter the Task to add ";

   
};




function addTaskToArray(){

    let userEnteredTask = inputField.value

    tasksArray.push(userEnteredTask);
    
    console.log(userEnteredTask);
    inputField.value = ""
        
}

function removeFunction (event){

    div.appendChild(inputField);
    inputField.placeholder = "Please Enter the Task id  to delete ";
}

function listFunction (event){


    for (let list of tasksArray){

        console.log("list in arrayt for loop",list);
        

        let lists = document.createElement("li");



    
        lists.innerText = list
    
    div.appendChild(lists)
    }

    // div.appendChild(ul);
    ul.innerHTML = "";
    console.log(tasksArray);
    
}
