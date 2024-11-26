// json is used by all programming languages , not restricted to JS because its JSOn

// JSON and JS object is different    both are key value pairs but the keys in JSON are strings 

// https://www.json.org/json-en.html
// undefined is not used in values 
// https://www.google.com/search?q=json+validator&oq=json+validator&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDINCAEQABiDARixAxiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIGCAcQBRhA0gEIMzQzOGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8


// Accessing JSON 
//  The JSON Data we get entirely in string format 

let  likeThis = '{"fact":"Kittens who are taken along on short, trouble-free car trips to town tend to make good passengers when they get older. They get used to the sounds and motions of traveling and make less connection between the car and the visits to the vet.","length":239}'

// lo like this we will get response from api in string format

// parse in programming language means changing from one data format to another 
// to convert JSON format to js object      JSON.parse(data)
// to convert object to JSON to send back in API response    JSON.stringify(json);