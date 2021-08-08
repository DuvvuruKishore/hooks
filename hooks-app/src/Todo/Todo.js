import React, { Component } from 'react';
import List from './List';

class todo extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItems:{
                text:"",
                key:''
            }
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.addItem=this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }
   changeHandler=(event)=>{
       this.setState({
           currentItems:{
               text:event.target.value,
               key:Date.now()
           }
       })
   }

   addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItems;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItems:{
        text:'',
        key:''
      }
    })
    }
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 
    render() {
        return (
            <div>

               <header>
               
               <input type="text" placeholder="enter text" value={this.state.currentItems.text} onChange={this.changeHandler}></input>
               <button  onClick={this.addItem}>add</button>
        

               </header>
               <List items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/> 
            </div>
        );
    }
}

export default todo;