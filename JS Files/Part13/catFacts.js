let paraFact = document.getElementById("fact");
let button = document.querySelector("button");

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res  = await axios.get(url);

        if(res) {
            return res.data.fact;
        }
    }
    catch (e){
            console.log("Error",e);
            return "no Fact Found"       
    }
    
}

button.addEventListener("click",factGenerator);

async function factGenerator(){
    response = await getFacts();
    console.log("the response we got in the factGenerator ",response);
    
    paraFact.innerText = `${response}`
}