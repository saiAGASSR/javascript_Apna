let button = document.querySelector("button");
let  jokeLine = document.querySelector("h4");
let url =  "https://icanhazdadjoke.com";
const  headersConfig = {
        headers : {
            Accept : "application/json"
        }
}

button.addEventListener("click",jokeEventListener);

function jokeEventListener(){
    randomJokeGenerator();
}

async function randomJokeGenerator(){
    let response = await axios.get(url,headersConfig);
    console.log(response.data.joke);
    let joke = response.data.joke;

    jokeLine.innerText = joke;
    
    
}