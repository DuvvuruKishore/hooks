import React, { Component } from 'react';

class Todos extends Component {
  constructor(props){
      super(props);
      this.state=
          {
              todos:[],
              todo:"",
              currentTodo:null
          }
      
  }
  changeHandler=({target:{value}})=>{
     this.setState({todo:value});
  }
  addTodo=()=>{
     const todos=[...this.state.todos];
     todos.push(this.state.todo);
     this.setState({todos:todos,todo:""})
  }
  editTodo=(index)=>{
     this.setState({todo:this.state.todos[index],currentTodo:index})
  }
  updateTodo=()=>{
   const todos=[...this.state.todos];
   todos[this.state.currentTodo]=this.state.todo;
   this.setState({todos:todos,todo:"",currentTodo:null});
  };
  
removeItem(index) {
    const todos = this.state.todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    this.setState({ todos })
  }
 

    render() {
    
        return (
            <div>
                <input type="text" value={this.state.todo} onChange={this.changeHandler}></input>
                {!this.state.currentTodo?(
                    <button onClick={this.addTodo}>add</button>
                ):(
                    <button onClick={this.updateTodo}>update</button>
                )}
            

                <br/>
                {this.state.todos.map((todo,index)=>{
                    return (
                        <p key={index}>{todo}
                    <button  onClick={()=>this.editTodo(index)}>edit</button>
                    <button  onClick={()=>this.removeItem(index)}>delete</button>
                    </p>
                 ) })}
        </div>
        );
    }
}

export default Todos;
