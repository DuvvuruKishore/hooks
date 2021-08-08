import React ,{useState} from 'react';

function HookCounterTwo() {
    let intialCount=0;

    let [count, setCount]=useState(intialCount);

    let incrementFive=()=>{
      for(let i=1;i<=5;i++){
          setCount(previos=>previos+1);
      }
    }
    return (
        <div>
            count:{count};
            <button onClick={()=>setCount(intialCount)}>reset</button>
            <button onClick={()=>setCount(previos=>previos+1)}>increment</button>
            <button onClick={()=>setCount(previos=>previos-1)}>decrement</button>
            <button onClick={incrementFive}>increment5</button>
        </div>
    );
}

export default HookCounterTwo;