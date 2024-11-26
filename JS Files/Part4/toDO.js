console.log("Operations : LIST ");
console.log("Operations : ADD" );
console.log("Operations : DELETE");
console.log("Operations : QUIT");
let toDo = [];
let req = prompt("Please enter the option to perform");
while (true) {
    if(req == "quit")
        {
            console.log("quitting app");
            break;
        }
    else if(req == "list")
        {
            console.log("------------");
            for(let i= 0 ; i < toDo.length ; i++ )
                {
                    console.log(i,toDo[i]);
                }
            console.log("------------"); 


        }
    else if(req == "add"){
        let task = prompt("Please enter the task you want to add");
        toDo.push(task);
    }else if(req == "delete"){
        let indx = prompt("please enter the index you want to delete ");
        toDo.splice(indx,1);
        console.log("deleted");
    }else{
        console.log("wrong request ");
    }
    req = prompt("Please enter the option to perform");
    
}
