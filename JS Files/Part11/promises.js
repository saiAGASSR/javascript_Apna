// prevent from callback hell

let h1 = document.querySelector("h1");

function promiseChange(color){
    return new Promise((resolve,reject) => {
    const isValidColor = /^#[0-9A-Fa-f]{6}$|^#[0-9A-Fa-f]{3}$|^[a-zA-Z]+$/.test(color);

    if( !isValidColor){
        return reject("invalid color");
    }


    setTimeout(()=>{

        resolve(h1.style.color = `${color}`);

    },1000)

    });
}


promiseChange("yellow")
    .then((success)=>{
        console.log("color changed",success);
        return promiseChange("red");
        
    })
    .then((success)=>{
        console.log("color changed",success);
        return promiseChange("orange");
    })
    .then((success)=>{
        console.log("color changed",success);
        return promiseChange("green");
    })
    .then((success)=>{
        console.log("color changed",success);
        return promiseChange("sfsdfsdff");
    
    })
    .then((success)=>{

        console.log("color changed",success);

    })

    .catch((error)=>{
        console.log("color issue due to ",error);
        
    });