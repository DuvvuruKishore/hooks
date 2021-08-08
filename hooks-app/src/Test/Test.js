import React from 'react';

import {TestContext} from './Context';
import Test2 from './Test2';

class Test extends React.Component {

static contextType=TestContext;

increment=()=>{
    this.context.increment();
};

    render(){
    return (
       
        <div>
        <TestContext.Consumer>
        {context=>{
            return(
            <div>
                <h1>test component</h1>  
          <p>count-{context.count}</p>
          <button onClick={this.increment}>increment</button>
          <button onClick={context.decrement}>decrement</button>
          
          </div>
            )
        }}
        </TestContext.Consumer>
        </div>

              );
}
}

export default Test;