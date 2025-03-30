
export  function HelloUser({username,color}){

    return (
        <>
        <h2 className="Hello"   style={ { "color" : {color} }}> Hello {username}</h2>
        </>
    )

}








///


import HelloUser from "./button.js"

import { useState } from 'react';

export default function App() {
    const [ count , setCount] = useState(0) ;
 function handleClick(){
     setCount(count +1);
 }
    
  return(

    <>
    <HelloUser  username = "sai"   color="green"  />

    </>
)
    
    
}

export  default function HelloUser({ username = "sai", color = "red" }) {
    return (
        <>
            <h2 className="Hello" style={{ color: color }}> 
                Hello {username} 
            </h2>
        </>
    );
}
