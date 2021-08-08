import React, { Component } from 'react';

class ClassComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            count:0,
            name:''
        }
    }

    componentDidMount(){
        document.title=`click ${this.state.count} items`
    }
    componentDidUpdate(prev,prevState){
        if(prevState.count!==this.state.count){
            console.log("king");
            document.title=`click ${this.state.count} items`
        }
    }
       

    render() {
        return (
            <div>
            <input type="text" value={this.state.value} onChange={(e)=>{this.setState({name:e.target.value})}}/>
                <button onClick={()=>this.setState({count:this.state.count+1})}>click{this.state.count}</button>
            </div>
        );
    }
}

export default ClassComponent;