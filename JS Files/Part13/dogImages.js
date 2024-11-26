let button = document.querySelector("button");

let img = document.querySelector("img");

let url = "https://dog.ceo/api/breeds/image/random";

button.addEventListener("click",dogEventListener);

async function randomDogGenerator (){
    let response = await axios.get(url);

    let url1 = await response.data.message;

    img.setAttribute("src",url1);
};

function dogEventListener(){
    randomDogGenerator();
}



