let url = "http://universities.hipolabs.com/search?name=";
let input = document.querySelector("input");
let list = document.querySelector("ul");

input.addEventListener("change",inputEventListener);

async function inputEventListener(){
    let country = input.value;
    let dataList = await getCollege(country);
    console.log("data Array",dataList);
    
    show(dataList);
}

function show(dataList){
    list.innerText = "";

    for(item of dataList){
        console.log("each item",item.name);
        
        let listItem = document.createElement("li");
        listItem.innerText= item.name;
        list.append(listItem);

    }

}

async function getCollege(country) {
    try{
        console.log("hi");
        let res = await axios.get(url + country);

        console.log(res);
        let data =  res.data;
        return data;        
        
    } catch(e){
        console.log("error:",e);
        return [];
        
    }
}