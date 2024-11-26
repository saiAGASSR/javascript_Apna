// internally it uses fetch 
// unless fetch the response need not to be parsed 
// https://github.com/axios/axios
// https://github.com/axios/axios?tab=readme-ov-file#installing

// consider this 

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res  = await axios.get(url);
        console.log("data1",res.data.fact);


        let res2  = await axios.get(url);
        console.log("data2",res2.data.fact);

        let res3  = await axios.get(url);
        console.log("data3",res3.data.fact);
       
    }
    catch (e){
            console.log("Error",e);       
    }
    
}

