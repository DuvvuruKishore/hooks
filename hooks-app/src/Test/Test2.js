import React from 'react';
import {TestContext} from './Context';

function Test2() {
    return (
        <div>
        <TestContext.Consumer>
        {context=>{
            return(
                <div>
                <h1>test2 component</h1>  
          <p>count-{context.count}</p>
          <button onClick={context.increment}>increment</button>
           <button onClick={context.decrement}>decrement</button>
        </div>
            )
        }}
        </TestContext.Consumer>
            
        </div>
    );
}

export default Test2;