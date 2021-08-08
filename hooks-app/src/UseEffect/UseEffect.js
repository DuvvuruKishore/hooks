import React, { useState,useEffect } from 'react';

function UseEffect() {
 
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');

    useEffect(()=>{
        console.log("king");
        document.title=`the king is ${count}`
    },[count])

    return (
        <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
           <button onClick={()=>setCount(count+1)}>click {count}</button> 
        </div>
    );
}

export default UseEffect;