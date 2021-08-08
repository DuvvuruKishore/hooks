import React from 'react';

export const TestContext=React.createContext({});

export  class AppContext extends React.Component{
    constructor(props){
        super(props);
        this.state={
          count:0
        }
      }
    increment=()=>{
      this.setState({count:this.state.count+1});
    };
    decrement=()=>{
      this.setState({count:this.state.count-1});
    }
    render(){
        return (
         
         <TestContext.Provider 
         value={{
           count:this.state.count,
           increment:this.increment,
           decrement:this.decrement
        }}
         >
         {this.props.children}
         </TestContext.Provider>
           );
      }
      }
       
