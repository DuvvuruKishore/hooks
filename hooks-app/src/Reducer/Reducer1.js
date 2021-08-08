import React,{useReducer} from 'react';


const intialState={
    firstCount:0,
    secondCount:10

};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstCount:state.firstCount+action.value};
        case 'decrement':
            return {...state,firstCount:state.firstCount-action.value};
        case 'increment2':
            return {...state,secondCount:state.secondCount+action.value};
        case 'decrement2':
            return {...state,secondCount:state.secondCount-action.value};
        
            case 'reset':
                return intialState;
                default:
                    return state
    }

}


function ReducerTwo() {
   const[count,dispatch]= useReducer(reducer,intialState);
   

    return (
        <div>
           <h1>count1-{count.firstCount}</h1> 
           <h1>count2-{count.secondCount}</h1>
           <button onClick={()=>dispatch({type:'increment',value:1})}>increment</button>
           <button  onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
           <button onClick={()=>dispatch({type:'increment',value:5})}>increment5</button>
           <button  onClick={()=>dispatch({type:'decrement',value:5})}>decrement5</button>
           <div>
           <button onClick={()=>dispatch({type:'increment2',value:1})}>increment2</button>
           <button  onClick={()=>dispatch({type:'decrement2',value:1})}>decrement2</button>
           </div>
           <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </div>
    );
}

export default ReducerTwo;