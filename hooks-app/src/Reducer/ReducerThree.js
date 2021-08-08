import React,{useReducer} from 'react';


const intialState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
            case 'reset':
                return intialState;
                default:
                    return state
    }

}


function ReducerThree() {
   const[count,dispatch]= useReducer(reducer,intialState);
   const[countTwo,dispatchTwo]=useReducer(reducer,intialState);

    return (
        <div>
           <h1>count-{count}</h1> 
           <button onClick={()=>dispatch('increment')}>increment</button>
           <button  onClick={()=>dispatch('decrement')}>decrement</button>
           <button onClick={()=>dispatch('reset')}>reset</button>
    
        <div>
        <h1>count-{countTwo}</h1> 
        <button onClick={()=>dispatchTwo('increment')}>increment</button>
        <button  onClick={()=>dispatchTwo('decrement')}>decrement</button>
        <button onClick={()=>dispatchTwo('reset')}>reset</button>
     </div>
      </div>
    );
}

export default ReducerThree;