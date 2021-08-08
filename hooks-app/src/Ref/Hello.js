import React, { Component } from 'react';

class Hello extends Component {
    constructor(props){
        super(props)
            this.state={
             name:"guvi"
            }
        
    }
    changeName=(name)=>{
        this.setState({name:name})
    }
    render() {
        return (
            <div>
            <h1>name-{this.state.name}</h1>
               <button onClick={()=>this.changeName("test")}>change</button> 
            </div>
        );
    }
}

export default Hello;