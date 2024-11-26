//  Generally in oldern days requests has been made by creating a XMLHTTPRequestObject
// problem with that is  promises {async } functionality will not work with that methods





//   fetch(url); this will return a promise  
// so we can apply all promise methods discussed previously 
// response.json() this will also create an object 

// let url = 'https://dog.ceo/api/breeds/image/random';

// let response = fetch(url);

// response
//     .then((response)=>{
//         console.log("dasdss",response);
//         // console.log(response.json());
//         console.log(response.json().then((data)=>{
//             console.log(data);
            
//         }));
        
        
        
//     })
//     .catch((error)=>{
//         console.log("Error :-",error);
        
//     });


// fetch(url)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("data1 :",data);
//         return fetch(url);
//     })
//     .then((res2)=>{
//         return res2.json();
//     })
//     .then((data)=>{
//         console.log("data2 :",data);
//     })
//     .catch((err)=>{
//         console.log("error",err);
        
//     })

// Web TA

// let url = 'https://dog.ceo/api/breeds/image/random11';

// fetch(url)
//     .then((response)=>{
//         console.log("dasdss",response);

//     })
//     .catch((error)=>{
//         console.log("Error :-",error);

//     });

// // TA2  
// let url = "https://catfact.ninja/fact2";

// fetch(url)
//     .then((res)=>{
//         console.log(res);
        
//     })
//     .catch((err) => {
//         console.log("ERROR - ",err);
//     });

// CHATGPT


//     let url = 'https://dog.ceo/api/breeds/image/random11'; // Incorrect URL for demonstration

// fetch(url)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log("Response Data:", data);
//     })
//     .catch((error) => {
//         console.error("Error :-", error.message);
//     });
